import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { IsByteLength, IsIn, IsNotEmpty } from "class-validator";
import * as R from 'remeda';
import { createQueryBuilder } from 'typeorm';
import { Article, ArticleIndex } from "../indices/articleIndex";
import { FavoriteUserIndex } from "../indices/favoritesUserIndex";
import { likeUser, LikeUserIndex } from "../indices/likeUserIndex";
import { user, UserIndex } from "../indices/userIndex";
import { Personal } from "../jarvisEntities/personal.entity";
import { datosPersonales } from "../jarvisEntities/datosGenerales.entity";

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
        private articleIndex: ArticleIndex
    ) { }

    public async createUser(newUser: user): Promise<user & { id: string; }> {
        try {

            let existingUser = await this.userIndex.getById(newUser.cedula);

            if (!!existingUser) {
                throw new ConflictException('ya existe un usuario con esta cedula');
            }

        } catch (error) {
            if (!error.body.found) {
                return this.userIndex.create(newUser, newUser.cedula)
            }
        }
    }

    public getJarvisUser = async (cedula: string) => {
        return await createQueryBuilder(datosPersonales)
            .where('documento = :doc', { doc: cedula })
            .getOne()
    }

    public updateUserRol = async (id_usuario: string, newUserRol: updateUserRolDTO): Promise<any> => {

        try {
            
            let existingUser = await this.userIndex.getById(id_usuario);
            
            console.log('usuario existia')

            return this.userIndex.updatePartialDocument(id_usuario, newUserRol)

        } catch (error) {

            let jarvisUser = await this.getJarvisUser(id_usuario)

            let newUser = await this.userIndex.create({
                cedula: id_usuario,
                nombre: jarvisUser.nombre_completo,
                pcrc: [],
                rol: newUserRol.rol
            }
                , id_usuario)

            
            console.log('usuario no existia')

            return { status: 'actualizado' }

        }


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

    public async getUserFavorites(userId: string, from: string, size: string): Promise<(Article & { id: string; })[]> {
        return await this.articleIndex.where({ favorites: userId }, from, size, { orderby: 'publicationDate', order: 'desc' })
    }
}