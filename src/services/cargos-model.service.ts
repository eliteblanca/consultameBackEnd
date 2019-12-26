import { Injectable, HttpException } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { Personal } from "../jarvisEntities/personal.entity";

export type cliente = {
    id_dp_clientes: number;
    cliente: string;
    pcrcs: {
        id_dp_pcrc: number;
        pcrc: string;
        cod_pcrc: string;
    }[]
}

@Injectable()
export class CargosModelService {

    constructor( ){  }

    async getBoss(cedula:string):Promise<{documento:string}>{
        return await createQueryBuilder<{documento:string}>('Personal')
                .select(['Personal.documento_jefe as documento'])
                .where('Personal.documento = :documento',{ documento: cedula })                
                .orderBy('Personal.fecha_actual','DESC')
                .limit(1)
            .getRawOne()
    }

    async getAllBoss(cedula:string){
        let info = { coordinador:'', director:'', gerente:'', lider:''};

        let lider = await this.getBoss(cedula)
        
        info.lider = lider.documento
        
        let coordi = await this.getBoss(info.lider)
        
        info.coordinador = coordi.documento

        let gerente = await this.getBoss(info.coordinador)
        
        info.gerente = gerente.documento

        let director = await this.getBoss(info.gerente)
        
        info.director = director.documento

        return info

    }
}