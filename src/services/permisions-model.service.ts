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

    @IsNotEmpty()
    @IsString()	
    detalle:string
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
        
    }

}