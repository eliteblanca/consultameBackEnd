import { Injectable, ConflictException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, MaxLength, IsIn, IsEmpty } from "class-validator";
import { LikeUserIndex, likeUser } from "../indices/likeUserIndex";
import { FavoriteUserIndex, favoriteUser } from "../indices/favoritesUserIndex";
import * as R from 'remeda';
export class newUserDTO {

  @IsNotEmpty({ message: "Debes proporcionar un username" })
  @MinLength(3, { message: "has proporcionado un username demasiado corto, debe contener minimo $constraint1 caracteres" })
  @MaxLength(70, { message: "has proporcionado un username demasiado largo, debe contener maximo $constraint1 caracteres" })
  public username: string;


  @IsNotEmpty({ message: "Debes proporcionar un password" })
  @MinLength(8, { message: "has proporcionado un password demasiado corto, debe contener minimo $constraint1 caracteres" })
  public password: string;


  @IsNotEmpty({ message: "Debes proporcionar un rol" })
  @IsIn(['admin', 'publicador', 'user'], { message: "el rol debe ser 'admin','publicador' ó 'user' " })
  public rol: string;

  @ValidateIf(o => o.rol != 'admin')
  @IsNotEmpty({ message: "debes proporcionar una sublinea" })
  @IsByteLength(0, 512, { message: "no has proporcionado un id valido para la sublinea" })
  public subLines: string[];

  @IsEmpty({ message: "no debes proporcionar un id para el usuario, el sistema lo genera automaticamente" })
  public id: string
}

export class deleteUserDTO {  
  @IsByteLength(0,512,{ message: "has proporcionado un id invalido"})
  public id:string
}

@Injectable()
export class UserModelService extends GenericModel {

  constructor(
    private likeUserIndex:LikeUserIndex,
    private favoriteUserIndex:FavoriteUserIndex
    ) {
    super()
  }

  public userLines(id_usuario: string): string[] {
    return ["Bancolombia", "Sura", "DirecTV"]
  }

  public userSubLines(id_usuario: string, id_linea: string): { name: string, sublines: string[] } {
    let subLines = [];

    switch (id_linea) {
      case 'Bancolombia':
        subLines = ["Atencion al cliente", "Ventas", "Soporte"]
        break;
      case 'Sura':
        subLines = ["Citas", "Urgencias"]
        break;
      case 'DirecTV':
        subLines = ["Soporte", "SAC"]
        break;
      default:
        subLines = ["Atencion al cliente", "Ventas", "Soporte"]
        break;
    }

    return { name: id_linea, sublines: subLines }
  }

  public async getUserByName(name: string): Promise<newUserDTO[]> {
    try {
      let result = await this.esClient.search({
        index: "users",
        body: {
          query: {
            bool: {
              filter: [
                { term: { username: name } }
              ]
            }
          }
        }
      })

      return result.body.hits.hits.map(userResult => { return { ...{ id: userResult._id }, ...userResult._source } });
    } catch (err) {
      console.log(err.meta.body.error);
    }
  }

  public async createUser(user: newUserDTO): Promise<any> {

    let usersWithName = await this.getUserByName(user.username);

    if (usersWithName.length) {
      throw new ConflictException('ya existe un usuario con este username');
    } else {
      let result = await this.indexDocument<newUserDTO>(user, 'users')
      let {password,...userData} = user;
      userData.id = result.body._id;
      return userData;
    }
  }

  public async getAllUsers(): Promise<any> {
    try {
      let result = await this.esClient.search({
        index: "users",
        body: {
          query: {
            "match_all": {}
          }
        }
      })

      return result.body.hits.hits.map(userSource => { 
        let {password, ...user} = userSource._source
        user.id = userSource._id;
        return user        
      });
    } catch (err) {
      console.log(err)
    }
  }

  public async deleteUser(userId:string): Promise<any>{
    try {      
      let result = await this.deleteDocument(userId,'users');
      return result;    
    } catch (error) {
      console.log(error)
    }
  }

  public async getUserLikes(userId:string):Promise<any>{
    let result = await this.likeUserIndex.where({user:userId,type:'like'})
    return R.map(result,(likeUser:likeUser)=>likeUser.article)
  }

  public async getUserDisLikes(userId:string):Promise<any>{
    let result = await this.likeUserIndex.where({user:userId,type:'dislike'})
    return R.map(result,(dislikeUser:likeUser) => dislikeUser.article)
  }

  public async getUserFavorites(userId:string):Promise<any>{
    let result = await this.favoriteUserIndex.where({user:userId})
    return R.map(result,(favoriteUser:favoriteUser) => favoriteUser.article)
  }

}