import { Injectable } from '@nestjs/common';
import { DbService } from "../services/db.service"

@Injectable()
export class UserjwtModelService {
    constructor(
        private db:DbService
    ) { }

    crearJWT = async (userId:string) => {
        return await this.db.NIK(`CALL crear_jwt(?)`,[userId])
    }

    borrarJWT = async (userId:string) => {
        return await this.db.NIK(`CALL borrar_jwt(?)`,[userId])
    }

    getJWT = async (userId) =>{
        return await this.db.NIK(`CALL get_jwt(?)`,[userId])
    }

}