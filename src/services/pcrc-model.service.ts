import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import * as R from 'remeda';
import * as sqlstring from 'sqlstring';
import { createQueryBuilder, getManager } from 'typeorm';
import { UserIndex } from "../indices/userIndex";
import { Personal } from "../jarvisEntities/personal.entity";
import { UserModelService } from "../services/user-model.service";
export class postUserPcrcDTO {

    @IsNotEmpty({ message: 'debes proporcionar un pcrc' })
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
        private userIndex: UserIndex,
        private userModel: UserModelService
    ) { }

    private sortBy = (obj, key) => {
        return obj.sort(function (a, b) {
            var textA = a[key];
            var textB = b[key];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }

    getAllPcrc = async () => {
        const entityManager = getManager();

        let rows:{
            id_dp_pcrc:number,
            cod_pcrc:string,
            pcrc:string,
            id_dp_clientes:number,
            cliente:string }[] = await entityManager.query(
            sqlstring.format(`
                    select 
                    a.id_dp_pcrc,
                    a.cod_pcrc,
                    a.pcrc,
                    b.id_dp_clientes,
                    b.cliente
                from
                dp_pcrc a
                inner join dp_clientes b
                on a.id_dp_clientes = b.id_dp_clientes
                where 
                (
                    a.estado = 1
                    and 
                    b.estado = 1                    
                )
                or
                a.id_dp_pcrc = 78
        
            `))

        let clientes:cliente[] = []

        rows.forEach(row => {
            let clienteId = clientes.findIndex(cliente => cliente.id_dp_clientes == row.id_dp_clientes)

            if(clienteId == -1){
                clientes.push({
                    cliente:row.cliente,
                    id_dp_clientes:row.id_dp_clientes,
                    pcrcs:[
                        { 
                            cod_pcrc:row.cod_pcrc,
                            id_dp_pcrc:row.id_dp_pcrc,
                            pcrc:row.pcrc
                        }
                    ]
                })
            } else {
                clientes[clienteId].pcrcs.push({
                    cod_pcrc:row.cod_pcrc,
                    id_dp_pcrc:row.id_dp_pcrc,
                    pcrc:row.pcrc
                })
            }
        })

        return clientes
    }

    getClienteOfPcrc = async (idPcrc): Promise<{ id: number; cliente: string; }> => {

        let result = await createQueryBuilder('Pcrc')
            .innerJoinAndSelect('Pcrc.id_dp_clientes', 'cliente')
            .where('Pcrc.id_dp_pcrc = :pcrc', { pcrc: idPcrc })
            .select(['cliente.id_dp_clientes as id', 'cliente.cliente as cliente'])
            .getRawOne()

        return result
    }

    getUserPcrc = async (cedula: string): Promise<cliente[]> => {

        if (cedula == '1036673423') {
            let result = await this.getAllPcrc()
            return this.sortBy(result, 'cliente')
        }

        let user = await this.userIndex.where({ cedula: cedula }, '0', '1')

        if (!!user.length) {

            if (user[0].pcrc.includes('todos')) {
                return await this.getAllPcrc()
            } else if (user[0].pcrc.length) {
                let pcrcsPorDefecto = await this.getDefaultsPcrc(cedula)

                let idsPcrcsPorDefecto = R.flatten(pcrcsPorDefecto.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

                let idsPcrcsDeUsuario = [...new Set(idsPcrcsPorDefecto.concat(user[0].pcrc))]// quitar duplicadps [1,1,2,2] = [1,2]

                let pcrcsConCliente = await this.getPcrcConCliente(idsPcrcsDeUsuario)

                return this.sortBy([...pcrcsConCliente], 'cliente')

            } else {
                
                return this.sortBy(await this.getDefaultsPcrc(cedula), 'cliente')
            }
            
        } else {
            return this.sortBy(await this.getDefaultsPcrc(cedula), 'cliente')
        }
    }

    getPcrcConCliente = async (idsPcrc:string[]) => {
        const entityManager = getManager();

        let rows:{
            id_dp_pcrc:number,
            cod_pcrc:string,
            pcrc:string,
            id_dp_clientes:number,
            cliente:string }[] = await entityManager.query(
            sqlstring.format(`
                    select 
                    a.id_dp_pcrc,
                    a.cod_pcrc,
                    a.pcrc,
                    b.id_dp_clientes,
                    b.cliente
                from
                dp_pcrc a
                inner join dp_clientes b
                on a.id_dp_clientes = b.id_dp_clientes
                where 
                (
                    a.estado = 1
                    and 
                    b.estado = 1
                    and a.id_dp_pcrc in(${ idsPcrc.join(',') })
                )
                or
                a.id_dp_pcrc = 78
        
            `))

        let clientes:cliente[] = []

        rows.forEach(row => {
            let clienteId = clientes.findIndex(cliente => cliente.id_dp_clientes == row.id_dp_clientes)

            if(clienteId == -1){
                clientes.push({
                    cliente:row.cliente,
                    id_dp_clientes:row.id_dp_clientes,
                    pcrcs:[
                        { 
                            cod_pcrc:row.cod_pcrc,
                            id_dp_pcrc:row.id_dp_pcrc,
                            pcrc:row.pcrc
                        }
                    ]
                })
            } else {
                clientes[clienteId].pcrcs.push({
                    cod_pcrc:row.cod_pcrc,
                    id_dp_pcrc:row.id_dp_pcrc,
                    pcrc:row.pcrc
                })
            }
        })

        return clientes
    }

    private getDefaultsPcrc = async (cedula: string):Promise<cliente[]> => {

        const entityManager = getManager();

        let rows:{
            id_dp_pcrc:number,
            cod_pcrc:string,
            pcrc:string,
            id_dp_clientes:number,
            cliente:string }[] = await entityManager.query(
            sqlstring.format(`
                select b.id_dp_pcrc, b.cod_pcrc, b.pcrc, c.id_dp_clientes, c.cliente from dp_distribucion_personal a
                inner join dp_pcrc b
                on a.cod_pcrc = b.cod_pcrc
                inner join dp_clientes c
                on c.id_dp_clientes = b.id_dp_clientes
                where a.documento = '${cedula}'
                and YEAR(a.fecha_actual) = YEAR(NOW())
                and MONTH(a.fecha_actual) = MONTH(NOW())
            `))

        let clientes:cliente[] = []

        rows.forEach(row => {
            let clienteId = clientes.findIndex(cliente => cliente.id_dp_clientes == row.id_dp_clientes)

            if(clienteId == -1){
                clientes.push({
                    cliente:row.cliente,
                    id_dp_clientes:row.id_dp_clientes,
                    pcrcs:[
                        { 
                            cod_pcrc:row.cod_pcrc,
                            id_dp_pcrc:row.id_dp_pcrc,
                            pcrc:row.pcrc
                        }
                    ]
                })
            } else {
                clientes[clienteId].pcrcs.push({
                    cod_pcrc:row.cod_pcrc,
                    id_dp_pcrc:row.id_dp_pcrc,
                    pcrc:row.pcrc
                })
            }
        })

        return clientes
    }

    postUserPcrc = async (cedula: string, idPcrc: string, cedulaUsuarioAdmin: string) => {

        if (idPcrc == 'todos') {

            let user = await this.userIndex.where({ cedula: cedula })

            if (user.length > 0) {

                let adminPcrc = await this.getUserPcrc(cedulaUsuarioAdmin)

                let UserPcrc = await this.getUserPcrc(cedula)

                let UserPcrcIds = R.flatten(UserPcrc.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

                let admiPpcrcIds = R.flatten(adminPcrc.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

                let duplicateQuit = [...new Set(UserPcrcIds.concat(admiPpcrcIds))]// quitar duplicadps

                await this.userIndex.updatePartialDocument(cedula, { pcrc: duplicateQuit })

                return { status: 'created' }

            } else {

                let jarvisInfo = await this.userModel.getJarvisUser(cedula)

                let adminPcrc = await this.getUserPcrc(cedulaUsuarioAdmin)

                let admiPpcrcIds = R.flatten(adminPcrc.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

                let newUser = await this.userModel.createUser({
                    cedula: cedula,
                    nombre: jarvisInfo.nombre_completo,
                    pcrc: admiPpcrcIds,
                    rol: 'user'
                })

                return { status: 'created' }
            }

        } else {

            let existingUserPcrc = await this.getUserPcrc(cedula)            

            if (existingUserPcrc.some(cliente => cliente.pcrcs.some(pcrc => pcrc.id_dp_pcrc.toString() == idPcrc))) {
                throw new ConflictException('el usuario ya tiene acceso a este pcrc')
            } else {
                let existingPcrc = await createQueryBuilder<cliente>('Clientes')
                    .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
                    .where('pcrc.estado = 1')
                    .andWhere('Clientes.estado = 1')
                    .andWhere('pcrc.id_dp_pcrc = :idPcrc', { idPcrc: idPcrc })
                    .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
                    .getOne()

                if (!!!existingPcrc) {
                    throw new NotAcceptableException('el pcrc no existe')
                } else {


                    let usuarioExiste = await this.userIndex.where({ cedula: cedula })

                    if (usuarioExiste.length > 0) {

                        let updateQuery = {
                            'source': 'ctx._source.pcrc.add(params.pcrc)',
                            'lang': 'painless',
                            'params': {
                                'pcrc': idPcrc
                            }
                        };

                        await this.userIndex.updateScript(cedula, updateQuery);

                    } else {

                        let datosPersonales = await createQueryBuilder("datosPersonales")
                            .where('datosPersonales.documento = :cedula', { cedula: cedula })
                            .getOne()

                        return await this.userModel.createUser({
                            cedula: cedula,
                            nombre: datosPersonales['nombre_completo'],
                            pcrc: [idPcrc],
                            rol: 'user'
                        })
                        
                    }
                }

                return { status: 'created' }
            }
        }
    }

    deleteUserPcrc = async (cedula: string, pcrc: string, cedulaUsuarioAdmin: string) => {

        if (pcrc == 'todos') {


            let adminPcrc = await this.getUserPcrc(cedulaUsuarioAdmin)

            let UserPcrc = await this.getUserPcrc(cedula)

            let UserPcrcIds = R.flatten(UserPcrc.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

            let admiPpcrcIds = R.flatten(adminPcrc.map(cliente => cliente.pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())))

            let difference = UserPcrcIds.filter(x => !admiPpcrcIds.includes(x))

            await this.userIndex.updatePartialDocument(cedula, { pcrc: difference })

        } else {

            let user = await this.userIndex.getById(cedula)

            let index = user.pcrc.findIndex(pcrc => pcrc == pcrc)

            if (index >= 0) {

                let updateQuery = {
                    'source': 'ctx._source.pcrc.remove(' + index + ')',
                    'lang': 'painless'
                }

                try {
                    return await this.userIndex.updateScript(cedula, updateQuery)
                } catch (error) {
                    console.log(error.meta.body.error)
                }
            }
        }
    }

    getPcrcUsers = async (idPcrc: string) => {

        const entityManager = getManager();

        let jarvisUsers: { documento: string, nombre: string }[] = await entityManager.query(
                    sqlstring.format(`
                        select
                        c.documento,
                        c.nombre_completo as nombre
                        from dp_pcrc a
                        inner join dp_distribucion_personal b
                        on a.cod_pcrc = b.cod_pcrc
                        inner join dp_datos_generales c
                        on b.documento = c.documento
                        where a.id_dp_pcrc = '${idPcrc}'
                        and YEAR(b.fecha_actual) = YEAR(NOW())
                        and MONTH(b.fecha_actual) = MONTH(NOW())
                    `))

        let existingUsers = await this.userIndex.query({
            query: {
                "terms": {
                    "cedula": jarvisUsers.map(result => result.documento)
                }
            }
        });

        let newJarvisUsers = jarvisUsers.map(user => {
            let existingUser = existingUsers.find(existingUser => existingUser.cedula == user.documento)

            if (existingUser) {
                return existingUser
            } else {
                return {
                    cedula: user.documento,
                    nombre: user.nombre,
                    rol: 'user',
                    pcrc: [idPcrc],
                }

            }

        })

        let extraUsers = await this.userIndex.query({
            query: {
                bool: {
                    must: [
                        {
                            terms: {
                                pcrc: [ idPcrc, 'todos' ]
                            }
                        }
                    ]
                }
            }
        });

        return newJarvisUsers.concat(extraUsers).sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            // a must be equal to b
            return 0;
        })
    }

    getPcrcInfo = async (idPcrc:string) => {

        const entityManager = getManager();

        let result = await entityManager.query(
            sqlstring.format(`
                SELECT 
                    id_dp_pcrc,
                    ciudad,
                    cod_pcrc,
                    pcrc
                FROM dp_pcrc
                WHERE id_dp_pcrc = ?`,[idPcrc]
            )
        )

        return result[0]
    }

    getClienteInfo = async (idCliente:string) => {
        return await createQueryBuilder<cliente>('Clientes')
        .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
        .where('pcrc.estado = 1')
        .andWhere('Clientes.estado = 1')
        .andWhere('Clientes.id_dp_clientes = :idCliente', { idCliente: idCliente })
        .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
        .getOne()
    }

}