import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, MaxLength, IsIn, IsEmpty } from "class-validator";
import { LikeUserIndex, likeUser } from "../indices/likeUserIndex";
import { FavoriteUserIndex, favoriteUser } from "../indices/favoritesUserIndex";
import { UserIndex, user } from "../indices/userIndex";
import { Article, ArticleIndex } from "../indices/articleIndex";
import * as async from 'async';
import * as R from 'remeda';

export class updateUserRolDTO {

    @IsNotEmpty({ message: "Debes proporcionar un rol" })
    @IsIn(['admin', 'publicador', 'user'], { message: "el rol debe ser 'admin','publicador' ó 'user' " })
    public rol: 'admin' | 'user' | 'publicador';

}

export class deleteUserDTO {
    @IsByteLength(0, 512, { message: "has proporcionado un id invalido" })
    public id: string
}

@Injectable()
export class UserModelService {

    constructor(
        private likeUserIndex: LikeUserIndex,
        private favoriteUserIndex: FavoriteUserIndex,
        private userIndex: UserIndex,
        private articleIndex: ArticleIndex,
    ) { }

    public async createUser(newUser:{cedula:string, rol:user["rol"]}): Promise<user & { id: string; }> {
        try{

            let existingUser = await this.userIndex.getById(newUser.cedula);

            if (!!existingUser) {
                throw new ConflictException('ya existe un usuario con esta cedula');
            }

        } catch (error) {
            if(!error.body.found) {
                return this.userIndex.create({ rol: newUser.rol }, newUser.cedula)
            }
        }
    }

    public updateUserRol = async (id_usuario: string, newUserRol: updateUserRolDTO): Promise<any> => {
        return this.userIndex.updatePartialDocument(id_usuario, newUserRol)
    }

    public async getAllUsers(): Promise<(user & { id: string; })[]> {
        try {
            let result = await this.userIndex.all()
            return result
        } catch (err) {
            console.log(err)
        }
    }

    public async deleteUser(userId: string): Promise<any> {
        try {
            return await this.userIndex.delete(userId)
        } catch (error) {
            if (error && error.meta && error.meta.body && error.meta.statusCode == 404) {
                throw new NotFoundException('usuario no encontrado')
            } else {
                console.log(error.meta.body)
            }
        }
    }

    public async getUserLikes(userId: string): Promise<any> {
        let result = await this.likeUserIndex.where({ user: userId, type: 'like' })
        return R.map(result, (likeUser: likeUser) => likeUser.article)
    }

    public async getUserDisLikes(userId: string): Promise<any> {
        let result = await this.likeUserIndex.where({ user: userId, type: 'dislike' })
        return R.map(result, (dislikeUser: likeUser) => dislikeUser.article)
    }

    public async getUserFavorites(userId: string, from:string, size:string): Promise<(Article & { id: string; })[]> {
        return await this.articleIndex.where({ favorites: userId }, from, size,  { orderby: 'publicationDate' , order:'desc'})
    }

}