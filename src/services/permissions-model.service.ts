import { ConflictException, Injectable } from '@nestjs/common';
import { IsIn, IsNotEmpty, Length, MaxLength, MinLength } from 'class-validator';
import { permission, PermissionsIndex } from "../indices/permissionsIndex";
import { resource, ResourcesIndex } from "../indices/resourcesIndex";
import { rol, RolesIndex } from "../indices/rolesIndex";
import { UserIndex } from "../indices/userIndex";


export class newRolDTO {
    @MinLength(3, { message: 'el nombre del rol es muy corto debe tener minimo $constraint1 caracteres de largo' })
    @MaxLength(250, { message: 'el nombre del rol es muy largo debe tener maximo $constraint1 caracteres de largo' })
    rol: string
}

export class newResourceDTO {
    @MinLength(3, { message: 'el nombre del recurso es muy corto debe tener minimo $constraint1 caracteres de largo' })
    @MaxLength(250, { message: 'el nombre del recurso es muy largo debe tener maximo $constraint1 caracteres de largo' })
    resource: string
}

export class newPermissionDTO {
    @IsNotEmpty({ message: "debes proporcionar un rol" })
    @Length(20, 20, { message: "debes proporcionar un rol valido" })
    role: string

    @IsNotEmpty({ message: "debes proporcionar un recurso" })
    @Length(20, 20, { message: "debes proporcionar un recurso valido" })
    resource: string

    @IsNotEmpty({ message: "debes proporcionar una accion sobre el recurso" })
    @IsIn(['create:any', 'read:any', 'update:any', 'delete:any', 'create:own', 'read:own', 'update:own', 'delete:own'])
    action: string

    @IsNotEmpty({ message: "debes proporcionar una lista de atributos" })
    @MaxLength(250, { message: 'la lista de atribuos es muy larga debe tener maximo $constraint1 caracteres de largo' })
    attributes: string
}

@Injectable()
export class PermissionsModelService {

    constructor(
        private rolesIndex: RolesIndex,
        private userIndex: UserIndex,
        private resourcesIndex: ResourcesIndex,
        private permissionsIndex: PermissionsIndex
    ) { }

    public createRol = async (newRol: newRolDTO): Promise<(rol & { id: string; })> => {
        let existingRol = await this.rolesIndex.where({ rol: newRol.rol })

        if (existingRol.length) {
            throw new ConflictException('ya existe un rol con este nombre')
        }

        return this.rolesIndex.create(newRol)
    }

    public getRoles = async (): Promise<(rol & { id: string; })[]> => {
        return await this.rolesIndex.all()
    }

    public updateRol = async (id: string, newRol: newRolDTO): Promise<any> => {
        let existingRol = await this.rolesIndex.where({ rol: newRol.rol })

        if (existingRol.length) {
            throw new ConflictException('ya existe un rol con este nombre')
        }

        return this.rolesIndex.updatePartialDocument(id, newRol)
    }
    //! ⚠️ agregar validacion al eliminar un id que no existe
    public deleteRol = async (id: string): Promise<any> => {
        // let rol = await this.rolesIndex.getById(id)
        // let users = await this.userIndex.where({ rol: rol.id })

        // if (users.length) {
        //     throw new ConflictException('no se puede eliminar un rol que tenga usuarios asignados')
        // }

        // return await this.rolesIndex.delete(id)
    }

    public createResource = async (newResource: newResourceDTO): Promise<(resource & { id: string; })> => {
        let existingResource = await this.resourcesIndex.where({ resource: newResource.resource })

        if (existingResource.length) {
            throw new ConflictException('ya existe un recurso con este nombre')
        }

        return this.resourcesIndex.create(newResource)
    }

    public getResources = async (): Promise<(resource & { id: string; })[]> => {
        return await this.resourcesIndex.all()
    }

    public updateResource = async (id: string, newResource: newResourceDTO): Promise<any> => {
        let existingResource = await this.resourcesIndex.where({ resource: newResource.resource })

        if (existingResource.length) {
            throw new ConflictException('ya existe un recurso con este nombre')
        }

        return this.resourcesIndex.updatePartialDocument(id, newResource)
    }
    //! ⚠️ agregar validacion al eliminar un id que no existe 
    public deleteResource = async (id: string): Promise<any> => {
        return await this.resourcesIndex.delete(id)
    }

    public createPermission = async (newPermission: newPermissionDTO): Promise<(permission & { id: string; })> => {
        let existingPermission = await this.permissionsIndex.where({
            action: newPermission.action,
            attributes: newPermission.attributes,
            resource: newPermission.resource,
            role: newPermission.role
        })

        if (existingPermission.length) {
            throw new ConflictException('ya existe un permiso con estos parametros')
        } else {
            return this.permissionsIndex.create(newPermission)
        }
    }
}