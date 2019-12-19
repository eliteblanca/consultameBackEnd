import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { IsByteLength, IsIn, IsNotEmpty } from "class-validator";
import * as R from 'remeda';
import { createQueryBuilder } from 'typeorm';
import { Article, ArticleIndex } from "../indices/articleIndex";
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

            return await this.userIndex.updatePartialDocument(id_usuario, newUserRol)

        } catch (error) {

            let jarvisUser = await this.getJarvisUser(id_usuario)

            let newUser = await this.userIndex.create({
                    cedula: id_usuario,
                    nombre: jarvisUser.nombre_completo,
                    pcrc: [],
                    rol: newUserRol.rol
                },
                id_usuario)

            

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

    public searchUsers = async (query:string) => {
        let jarvisUsers:{documento:string, nombre:string}[] = await createQueryBuilder(datosPersonales,'datos')
            .select(['datos.documento as documento','datos.nombre_completo as nombre'])
            .where("datos.documento LIKE :query",{ query:'%' + query + '%' })
            .orWhere("datos.nombre_completo LIKE :query",{ query:'%' + query + '%' })
            .getRawMany()

        let existingUsers = await this.userIndex.query({
            query: {
                "terms": {
                    "cedula": jarvisUsers.map(result => result.documento)
                }
            }
        });

        let newJarvisUsers = jarvisUsers.map(user => {
            let existingUser = existingUsers.find(existingUser => existingUser.cedula == user.documento)
0
            if(existingUser){
                let {id , ...userSinId} = existingUser;
                return userSinId
            } else {
                return {
                        cedula:user.documento,
                        nombre:user.nombre,
                        rol: "user",
                        pcrc:[],
                    }
            }
        })

        return newJarvisUsers
    }
}