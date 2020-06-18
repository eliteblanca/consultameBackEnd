import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { IsNotEmpty, IsString, IsAlphanumeric, IsNumberString, IsOptional } from 'class-validator';
import * as R from 'remeda';
import * as sqlstring from 'sqlstring';
import { createQueryBuilder, getManager } from 'typeorm';
import { UserIndex } from "../indices/userIndex";
import { Personal } from "../jarvisEntities/personal.entity";
import { UserModelService } from "./user-model.service";
import { DbService } from "./db.service"
import { baseRaw } from "../entities";

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
export class postUserPcrcDTO {

    @IsNotEmpty()
    @IsString()
    public pcrc: string;

}

export class postBaseDTO {

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsString()
    subaseNombre:string

}

export class postSubBaseDTO {

    @IsNotEmpty()
    @IsString()
    nombre:string
    
    @IsNotEmpty()
    @IsString()
    parentId:string


}

export type base = {
    id: number;
    nombre: string;
    subBases: {
        id: number;
        nombre: string;
    }[]
}

@Injectable()
export class BaseModelService {

    constructor(
        private db:DbService
    ) { }

    createBase = async (nombre:string, nombreSubBase:string, creatorId:string) => {
        return await this.db.NIK('call crear_base(?, ?, ?)',[nombre, nombreSubBase, creatorId])
    }
    
    createSubBase = async (nombreSubBase:string, parentId:string, creatorId:string) => {
        return await this.db.NIK('call crear_sub_base(?, ?, ?)',[nombreSubBase, parentId, creatorId])
    }

    private sortBy = (obj, key) => {
        return obj.sort(function (a, b) {
            var textA = a[key];
            var textB = b[key];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }

    // getAllPcrc = async () => {
    //     return await createQueryBuilder<cliente>('Clientes')
    //         .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
    //         .where('pcrc.estado = 1')
    //         .andWhere('Clientes.estado = 1')
    //         .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
    //         .getMany()
    // }

    // getClienteOfPcrc = async (idPcrc): Promise<{ id: number; cliente: string; }> => {

    //     let result = await createQueryBuilder('Pcrc')
    //         .innerJoinAndSelect('Pcrc.id_dp_clientes', 'cliente')
    //         .where('Pcrc.id_dp_pcrc = :pcrc', { pcrc: idPcrc })
    //         .select(['cliente.id_dp_clientes as id', 'cliente.cliente as cliente'])
    //         .getRawOne()

    //     return result
    // }

    getUserBases = async (userId: string): Promise<base[]> => {

        let rawBases:baseRaw[] = await this.db.NIK('call get_user_bases(?)',[userId])


        var bases:base[] = []

        rawBases.forEach((baseRaw, index) => {
            var baseIndex = bases.findIndex(base => base.id == baseRaw.parentId)

            if(baseIndex != -1){
                bases[baseIndex].subBases.push({id:baseRaw.subBaseId, nombre:baseRaw.subBaseNombre})
            } else {
                var newBase:base = {
                    id:baseRaw.parentId,
                    nombre:baseRaw.parentNombre,
                    subBases:[
                        {
                            id:baseRaw.subBaseId,
                            nombre:baseRaw.subBaseNombre
                        }
                    ]
                }

                bases.push(newBase)
            }
        })

        return this.sortBy(await bases, 'nombre')
    }

    // private getDefaultsPcrc = async (cedula: string):Promise<cliente[]> => {

    //     const entityManager = getManager();

    //     let rows:{
    //         id_dp_pcrc:number,
    //         cod_pcrc:string,
    //         pcrc:string,
    //         id_dp_clientes:number,
    //         cliente:string }[] = await entityManager.query(
    //         sqlstring.format(`
    //             select b.id_dp_pcrc, b.cod_pcrc, b.pcrc, c.id_dp_clientes, c.cliente from dp_distribucion_personal a
    //             inner join dp_pcrc b
    //             on a.cod_pcrc = b.cod_pcrc
    //             inner join dp_clientes c
    //             on c.id_dp_clientes = b.id_dp_clientes
    //             where a.documento = '${cedula}'
    //             and YEAR(a.fecha_actual) = YEAR(NOW())
    //             and MONTH(a.fecha_actual) = MONTH(NOW())
    //         `))

    //     let clientes:cliente[] = []

    //     rows.forEach(row => {
    //         let clienteId = clientes.findIndex(cliente => cliente.id_dp_clientes == row.id_dp_clientes)

    //         if(clienteId == -1){
    //             clientes.push({
    //                 cliente:row.cliente,
    //                 id_dp_clientes:row.id_dp_clientes,
    //                 pcrcs:[
    //                     { 
    //                         cod_pcrc:row.cod_pcrc,
    //                         id_dp_pcrc:row.id_dp_pcrc,
    //                         pcrc:row.pcrc
    //                     }
    //                 ]
    //             })
    //         } else {
    //             clientes[clienteId].pcrcs.push({
    //                 cod_pcrc:row.cod_pcrc,
    //                 id_dp_pcrc:row.id_dp_pcrc,
    //                 pcrc:row.pcrc
    //             })
    //         }
    //     })

    //     return clientes
    // }

    postUserBase = async (userId: string, baseId: string, cedulaUsuarioAdmin: string) => {
        if (baseId == 'todos') {
            return await this.db.NIK('call asign_all_bases_from_user(?, ?)',[cedulaUsuarioAdmin, userId])
        } else {
            return await this.db.NIK('call asign_base_to_user(?, ?)',[userId, baseId])
        }
    }
    
    deleteUserBase = async (user_id: string, base_id: string, idUsuarioAdmin?: string) => {
        if (base_id == 'todos') {
            console.log(idUsuarioAdmin, user_id)
            return await this.db.NIK('call des_asignar_todas_bases(?, ?)',[idUsuarioAdmin, user_id])
        } else {
            return await this.db.NIK('call desasignar_base(?, ?)',[user_id, base_id])
        }
    }

    // getPcrcUsers = async (idPcrc: string) => {

    //     const entityManager = getManager();

    //     let jarvisUsers: { documento: string, nombre: string }[] = await entityManager.query(
    //                 sqlstring.format(`
    //                     select
    //                     c.documento,
    //                     c.nombre_completo as nombre
    //                     from dp_pcrc a
    //                     inner join dp_distribucion_personal b
    //                     on a.cod_pcrc = b.cod_pcrc
    //                     inner join dp_datos_generales c
    //                     on b.documento = c.documento
    //                     where a.id_dp_pcrc = '${idPcrc}'
    //                     and YEAR(b.fecha_actual) = YEAR(NOW())
    //                     and MONTH(b.fecha_actual) = MONTH(NOW())
    //                 `))

    //     let existingUsers = await this.userIndex.query({
    //         query: {
    //             "terms": {
    //                 "cedula": jarvisUsers.map(result => result.documento)
    //             }
    //         }
    //     });

    //     let newJarvisUsers = jarvisUsers.map(user => {
    //         let existingUser = existingUsers.find(existingUser => existingUser.cedula == user.documento)

    //         if (existingUser) {
    //             return existingUser
    //         } else {
    //             return {
    //                 cedula: user.documento,
    //                 nombre: user.nombre,
    //                 rol: 'user',
    //                 pcrc: [idPcrc],
    //             }

    //         }

    //     })

    //     let extraUsers = await this.userIndex.query({
    //         query: {
    //             bool: {
    //                 must: [
    //                     {
    //                         terms: {
    //                             pcrc: [ idPcrc, 'todos' ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         }
    //     });

    //     return newJarvisUsers.concat(extraUsers).sort((a, b) => {
    //         if (a.nombre > b.nombre) {
    //             return 1;
    //         }
    //         if (a.nombre < b.nombre) {
    //             return -1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //     })
    // }

    // getPcrcInfo = async (idPcrc:string) => {

    //     const entityManager = getManager();

    //     let result = await entityManager.query(
    //         sqlstring.format(`
    //             SELECT 
    //                 id_dp_pcrc,
    //                 ciudad,
    //                 cod_pcrc,
    //                 pcrc
    //             FROM dp_pcrc
    //             WHERE id_dp_pcrc = ?`,[idPcrc]
    //         )
    //     )

    //     return result[0]
    // }

    // getClienteInfo = async (idCliente:string) => {
    //     return await createQueryBuilder<cliente>('Clientes')
    //     .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
    //     .where('pcrc.estado = 1')
    //     .andWhere('Clientes.estado = 1')
    //     .andWhere('Clientes.id_dp_clientes = :idCliente', { idCliente: idCliente })
    //     .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
    //     .getOne()
    // }

}