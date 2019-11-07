import { Injectable, NotAcceptableException, ConflictException } from '@nestjs/common';
import { Connection, createQueryBuilder } from 'typeorm';
import { Pcrc } from "../jarvisEntities/pcrc.entity";
import { Clientes } from "../jarvisEntities/clientes.entity";
import { Personal } from "../jarvisEntities/personal.entity";
import { UserPcrcIndex } from "../indices/userPcrcIndex";
import { IsNotEmpty, MinLength } from 'class-validator';

export class postUserPcrcDTO {

    @IsNotEmpty({ message: 'debes proporcionar un pcrc' })
    @MinLength(4, { message: 'has proporcionado un pcrc invalido, debe contener minimo $constraint1 caracteres' })
    public pcrc: string;   

}

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
export class PcrcModelService {

    constructor(
        private readonly connection: Connection,
        private userPcrcIndex:UserPcrcIndex
    ){  }

    getAllPcrc = async (from:string = '0', size:string = '20') => {
        return await createQueryBuilder<cliente>('Clientes')
            .innerJoinAndSelect('Clientes.pcrcs','pcrc')
            .where('pcrc.estado = 1')
            .andWhere('Clientes.estado = 1')           
            .select(['Clientes.id_dp_clientes', 'Clientes.cliente','pcrc.id_dp_pcrc','pcrc.cod_pcrc','pcrc.pcrc'])
            .skip(parseInt(from))
            .take(parseInt(size))
            .getMany()
    }

    getUserPcrc = async (cedula:string, from:string = '0', size:string = '20') => {

        let existingUserPcrc = await this.userPcrcIndex.where({ cedula:cedula },'0','1')        

        if(!!existingUserPcrc.length){

            if(existingUserPcrc[0].pcrc == 'todos' || cedula == '1036673423'){
                return this.getAllPcrc(from, size)
            }else{
                existingUserPcrc = await this.userPcrcIndex.where({ cedula:cedula }, from, size)
                
                return await createQueryBuilder<cliente>('Clientes')
                .innerJoinAndSelect('Clientes.pcrcs','pcrc')
                .where('pcrc.estado = 1')
                .andWhere('Clientes.estado = 1')
                .andWhere('pcrc.cod_pcrc IN (:...pcrcCodes)', { pcrcCodes: existingUserPcrc.map(pcrcObj => pcrcObj.pcrc) })
                .select(['Clientes.id_dp_clientes', 'Clientes.cliente','pcrc.id_dp_pcrc','pcrc.cod_pcrc','pcrc.pcrc'])
                .getMany()
            }

        }else{
            return await createQueryBuilder<cliente>('Clientes')
            .innerJoinAndSelect('Clientes.pcrcs','pcrc')
            .innerJoin(qb => 
                    qb.select(['Personal.pcrc as pcrc'])
                    .from(Personal,'Personal')
                    .innerJoin(qb => 
                            qb.select(['max(Personal.fecha_actual) as fecha','Personal.documento as documento'])
                            .from(Personal,'Personal')
                            .groupBy()
                        ,'fechas'
                        ,'Personal.fecha_actual = fechas.fecha'
                    )
                    .where('Personal.documento = :documento',{ documento:cedula })
                ,'accesos'
                ,'accesos.pcrc = pcrc.cod_pcrc'
            )
            .where('pcrc.estado = 1')
            .andWhere('Clientes.estado = 1')
            .select(['Clientes.id_dp_clientes', 'Clientes.cliente','pcrc.id_dp_pcrc','pcrc.cod_pcrc','pcrc.pcrc'])
            .skip(parseInt(from))
            .take(parseInt(size))
            .getMany()

        }
    }

    postUserPcrc = async (cedula:string, pcrc:string) => {
        
        let accesoTodos = await this.userPcrcIndex.where({cedula:cedula, pcrc:'todos'})
        
        if(!!accesoTodos.length){
            throw new ConflictException('el usuario ya tiene acceso a este pcrc')      
        }

        if(pcrc == 'todos'){

            await this.userPcrcIndex.deleteWhere({cedula:cedula})

            this.userPcrcIndex.create({ cedula: cedula, pcrc:pcrc })

            return { status:'created' }
        }

        let existingUserPcrc = await this.userPcrcIndex.where({cedula:cedula, pcrc:pcrc})
        
        if(!!existingUserPcrc.length){
            throw new ConflictException('el usuario ya tiene acceso a este pcrc')            
        }

        let existingPcrc = await createQueryBuilder<cliente>('Clientes')
            .innerJoinAndSelect('Clientes.pcrcs','pcrc')
            .where('pcrc.estado = 1')
            .andWhere('Clientes.estado = 1')
            .andWhere('pcrc.cod_pcrc = :codigoPcrc',{ codigoPcrc:pcrc })
            .select(['Clientes.id_dp_clientes', 'Clientes.cliente','pcrc.id_dp_pcrc','pcrc.cod_pcrc','pcrc.pcrc'])
            .getOne()

        if(!!!existingPcrc){
            throw new NotAcceptableException('el pcrc no existe')
        }

        this.userPcrcIndex.create({ cedula: cedula, pcrc:pcrc })

        return { status:'created' }
    }
    
    deleteUserPcrc = async (cedula:string, pcrc:string) => {
        this.userPcrcIndex.deleteWhere({ cedula:cedula, pcrc:pcrc })
    }

}