import { Injectable } from '@nestjs/common';
import { DbService } from "../services/db.service"
import { IsNotEmpty, IsString } from 'class-validator';
import { perfil } from '../entities'

export class perfilDTO {

    @IsNotEmpty()
    @IsString()	
    nombre:string
}

export class permisoDTO {

    @IsNotEmpty()
    @IsString()	
    accion:string

    @IsNotEmpty()
    @IsString()	
    objeto:string
}

export class asignarPerfilDTO {
    @IsNotEmpty()
    @IsString()	
    perfil:string
}

@Injectable()
export class PermisionsModelService {

    constructor(
        private db:DbService
    ){  }

    crearPerfil = async (nombre:string) => {
        return await this.db.NIK(`CALL crear_perfil(?)`,[nombre])
    }

    getPerfiles = async ():Promise<perfil[]> => {
        return await this.db.NIK(`CALL get_perfiles()`)
    }
    
    actualizarPerfil = async (id:string, nuevoNombre:string ) => {
        return await this.db.NIK(`CALL actualizar_perfil(?,?)`,[id, nuevoNombre])
    }
    
    borrarPerfil = async (id:string) => {
        return await this.db.NIK(`CALL borrar_perfil(?)`,[id])
    }
    
    asignarPermiso = async (idPerfil:string, permiso:permisoDTO) => {
        return await this.db.NIK(`CALL asignar_permiso(?, ?, ?)`,[idPerfil, permiso.objeto, permiso.accion])
    }
    
    borrarPermiso = async (idPermiso:string) => {
        return await this.db.NIK(`CALL borrar_permiso(?)`,[idPermiso])
    }

    getPermisos = async (idPerfil:string) => {
        return await this.db.NIK(`CALL get_pemisos_perfil(?)`,[idPerfil])
    }

    actualizarPermiso = async (idPermiso:string, permiso:permisoDTO ) => {
        return await this.db.NIK(`CALL actualizar_permiso(?, ?, ?)`,[idPermiso, permiso.accion, permiso.objeto ])
    }
    
    asignarPerfil = async (userId:string, perfilId:string) => {
        return await this.db.NIK(`CALL asignar_perfil(?, ?)`,[userId, perfilId])
    }

    desasignarPerfil = async (userId:string, perfilId:string) => {
        return await this.db.NIK(`CALL desasignar_perfil(?, ?)`,[userId, perfilId])
    }

    getUserPerfiles = async (userId:string):Promise<perfil[]> => {
        return await this.db.NIK(`CALL get_usuario_perfiles(?)`,[userId])
    }

}