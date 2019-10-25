import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, MaxLength, IsIn, IsEmpty } from "class-validator";
import { LikeUserIndex, likeUser } from "../indices/likeUserIndex";
import { FavoriteUserIndex, favoriteUser } from "../indices/favoritesUserIndex";
import { UserIndex, user, userWithoutPassword } from "../indices/userIndex";
import { UserSubLinesIndex, userSubLine } from "../indices/userSubLinesIndex";
import { SublinesIndex, subline } from "../indices/sublinesIndex";
import { LinesIndex, line } from "../indices/linesIndex";
import { Article, ArticleIndex } from "../indices/articleIndex";
import * as async from 'async';
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
    public rol: 'admin' | 'user' | 'publicador';

}

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
        private userSubLinesIndex: UserSubLinesIndex,
        private sublinesIndex: SublinesIndex,
        private articleIndex: ArticleIndex,
        private linesIndex: LinesIndex
    ) { }

    public postUserSubline = async (userId: string, subline: string): Promise<any> => {

        let existingSublines = await this.userSubLinesIndex.where({ user: userId, subline: subline })

        if (existingSublines.length) {
            throw new ConflictException("este permiso ya esta asignado")
        }

        try {
            let user = this.userIndex.getById(userId)
        } catch (error) {
            if (error && error.meta && error.meta.body && error.meta.statusCode == 404) {
                throw new NotFoundException('linea no encontrada')
            } else {
                console.log(error.meta.body)
            }
        }

        try {
            let subline = this.userIndex.getById(userId)
        } catch (error) {
            if (error && error.meta && error.meta.body && error.meta.statusCode == 404) {
                throw new NotFoundException('linea no encontrada')
            } else {
                console.log(error.meta.body)
            }
        }

        this.userSubLinesIndex.create({ user: userId, subline: subline })
        return { status:"agregado" }
    }

    public deleteUserSubline = async (userId: string, subline: string): Promise<any> => this.userSubLinesIndex.deleteWhere({ subline: subline, user: userId })

    public getUserSubLines = async (id_usuario: string): Promise<(line & { id: string; sublines: (subline & { id: string })[] })[]> => {

        try {

            function distinct(key) {
                return (data) => {
                    var newArray = []

                    for (var i = 0; i < data.length; i++) {
                        if (!newArray.includes(data[i][key])) {
                            newArray.push(data[i][key])
                        }
                    }
                    return newArray
                }
            }

            let distinctLines = distinct('line')

            let user = await this.userIndex.getById(id_usuario)

            let userSubLines;

            let sublines : (subline & { id: string })[];

            if(user.rol != 'admin'){
                
                userSubLines = await this.userSubLinesIndex.where({ user: id_usuario })
                
                sublines = await async.map(userSubLines.map(userSubLine => userSubLine.subline), this.sublinesIndex.getById)

            }else{

                sublines = await this.sublinesIndex.all()

            }

            let lineasDistintas: (line & { id: string })[] = await async.map(distinctLines(sublines), this.linesIndex.getById)

            let lineasConSublineas: (line & { id: string; sublines: (subline & { id: string })[] })[]

            lineasConSublineas = lineasDistintas.map(linea => ({ ...linea, sublines: [] }))

            sublines.forEach(subline => {
                let index = lineasConSublineas.findIndex(line => line.id == subline.line)
                lineasConSublineas[index].sublines.push(subline)
            });

            return lineasConSublineas
        } catch (error) {
            console.log(error)
        }
    }

    public async getUserByName(name: string): Promise<(user & { id: string; })[]> {
        try {
            let result = await this.userIndex.where({ username: name })
            return result
        } catch (err) {
            console.log(err.meta.body.error);
        }
    }

    public async createUser(newUser: newUserDTO): Promise<userWithoutPassword & { id: string; }> {

        let usersWithName = await this.getUserByName(newUser.username);

        if (usersWithName.length) {
            throw new ConflictException('ya existe un usuario con este username');
        } else {
            let result = await this.userIndex.create(newUser)
            let { password, ...userData } = result;
            return userData;
        }
    }

    public updateUserRol = async (id_usuario: string, newUserRol: updateUserRolDTO): Promise<any> => {
        return this.userIndex.updatePartialDocument(id_usuario, newUserRol)
    }

    public async getAllUsers(): Promise<(userWithoutPassword & { id: string; })[]> {
        try {
            let result = await this.userIndex.all()
            return result.map(({ password, ...userData }) => userData);
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