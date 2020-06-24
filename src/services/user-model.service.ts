import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { IsByteLength, IsIn, IsNotEmpty, IsString } from "class-validator";
import * as R from 'remeda';
import * as sqlstring from 'sqlstring';
import { createQueryBuilder, getManager } from 'typeorm';
import { Article, ArticleIndex } from "../indices/articleIndex";
import { likeUser, LikeUserIndex } from "../indices/likeUserIndex";
import { user, UserIndex } from "../indices/userIndex";
import { datosPersonales } from "../jarvisEntities/datosGenerales.entity";
import { DbService } from "../services/db.service"
import { from } from 'rxjs';
import { userRaw } from "../entities";
 export class updateUserRolDTO {

    @IsNotEmpty({ message: "Debes proporcionar un rol" })
    @IsIn(['admin', 'publicador', 'user'], { message: "el rol debe ser 'admin','publicador' ó 'user' " })
    public rol: 'admin' | 'user' | 'publicador';

}

export class deleteUserDTO {
    public id: string
}

export class createUserDTO {
    @IsNotEmpty()
    @IsString()
    nombre:string;

    @IsNotEmpty()
    @IsString()
    documento:string;
}


@Injectable()
export class UserModelService {


    constructor(
        private likeUserIndex: LikeUserIndex,
        private userIndex: UserIndex,
        private articleIndex: ArticleIndex,
        private db:DbService
    ) { }

    public async createUser(nombre:string, documento:string): Promise<userRaw> {
        let result = await this.db.NIK(`call crear_usuario(?,?)`,[nombre, documento])
        return result[0]
    }

    public async getUserByUserName(userName:string):Promise<userRaw>{
        let result = await this.db.NIK('call get_usuario_by_username(?)',[userName])
        return result[0]
    }

    public async getUserById(userId:string):Promise<userRaw>{
        let result = await this.db.NIK('call get_usuario_by_id(?)',[userId])
        return result[0]
    }

    // public getJarvisUser = async (cedula: string) => {
    //     return await createQueryBuilder(datosPersonales)
    //         .where('documento = :doc', { doc: cedula })
    //         .getOne()
    // }

    // public updateUserRol = async (id_usuario: string, newUserRol: updateUserRolDTO): Promise<any> => {

    //     let existingUser = await this.userIndex.getById(id_usuario);

    //     if (!!existingUser) {

    //         return await this.userIndex.updatePartialDocument(id_usuario, newUserRol)

    //     } else {

    //         let jarvisUser = await this.getJarvisUser(id_usuario)

    //         if(!!jarvisUser){
    //             let newUser = await this.userIndex.create({
    //                 cedula: id_usuario,
    //                 nombre: jarvisUser.nombre_completo,
    //                 pcrc: [],
    //                 rol: newUserRol.rol
    //             })
    //         } else {
    //             throw new NotFoundException('usuario no encontrado')
    //         }

    //         return { status: 'actualizado' }
    //     }
    // }

    // public async getAllUsers(): Promise<(user & { id: string; })[]> {
    //     try {
    //         let result = await this.userIndex.all()
    //         return result
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    public async deleteUser(userId: string): Promise<any> {
        return await this.db.NIK('call borrar_usario(?)',[userId])
    }

    // public async getUserLikes(userId: string): Promise<any> {
    //     let result = await this.likeUserIndex.where({ user: userId, type: 'like' })
    //     return R.map(result, (likeUser: likeUser) => likeUser.article)
    // }

    // public async getUserDisLikes(userId: string): Promise<any> {
    //     let result = await this.likeUserIndex.where({ user: userId, type: 'dislike' })
    //     return R.map(result, (dislikeUser: likeUser) => dislikeUser.article)
    // }

    // public async getUserFavorites(userId: string, from: string, size: string): Promise<(Article & { id: string; })[]> {
    //     return await this.articleIndex.where({ favorites:  userId, state:'published'  }, from, size, { orderby: 'publicationDate', order: 'desc' })
    // }

    public searchUsers = async (query: string, baseId:string) => {
        return await this.db.NIK('call buscar_usuario(?, ?)',[query, baseId])
    }

    
}