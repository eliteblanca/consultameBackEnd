import { Injectable, ConflictException } from '@nestjs/common';
import { RolesIndex, rol } from "../indices/rolesIndex";
import { UserIndex } from "../indices/userIndex";
import * as R from 'remeda';
import { MinLength, MaxLength, IsAlphanumeric } from 'class-validator';

export class newRolDTO {
    @MinLength(3,{ message: 'el nombre del rol es muy corto debe tener minimo $constraint1 caracteres de largo'})
    @MaxLength(250,{ message: 'el nombre del rol es muy largo debe tener maximo $constraint1 caracteres de largo'})
    @IsAlphanumeric({ message: 'el nombre del rol solo debe contener caracteres alfanumericos'})
    rol:string
}

@Injectable()
export class PermissionsModelService {

    constructor(
        private rolesIndex:RolesIndex,
        private userIndex:UserIndex
    ) {  }

    public createRol = async (newRol:newRolDTO):Promise<(rol & { id: string; })> => {
        let existingRol = await this.rolesIndex.where({rol:newRol.rol})

        if(existingRol.length){
            throw new ConflictException('ya existe un rol con este nombre')
        }

        return this.rolesIndex.create(newRol)
    }

    public getRoles = async ():Promise<(rol & { id: string; })[]> => {
        return await this.rolesIndex.all()
    }

    public updateRol = async (id:string, newRol:newRolDTO):Promise<any> => {
        let existingRol = await this.rolesIndex.where({rol:newRol.rol})

        if(existingRol.length){
            throw new ConflictException('ya existe un rol con este nombre')
        }

        return this.rolesIndex.updatePartialDocument(id, newRol)
    }

    public deleteRol = async (id:string):Promise<any> => {
        let rol = await this.rolesIndex.getById(id)
        let users = await this.userIndex.where({rol:rol.id})

        if(users.length){
            throw new ConflictException('no se puede eliminar un rol que tenga usuarios asignados')
        }

        return await this.rolesIndex.delete(id)
    }
}