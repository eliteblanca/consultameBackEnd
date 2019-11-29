import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { IsNotEmpty, MinLength } from 'class-validator';
import { createQueryBuilder } from 'typeorm';
import { Personal } from "../jarvisEntities/personal.entity";
import { UserIndex, user } from "../indices/userIndex";
import { UserModelService } from "../services/user-model.service";
import { Pcrc } from 'src/jarvisEntities/pcrc.entity';
import * as R from 'remeda';

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
        return obj.sort(function(a, b) {
            var textA = a[key];
            var textB = b[key];
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }

    getAllPcrc = async () => {
        return await createQueryBuilder<cliente>('Clientes')
            .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
            .where('pcrc.estado = 1')
            .andWhere('Clientes.estado = 1')
            .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
            .getMany()
    }

    getClienteOfPcrc = async (idPcrc): Promise<{ id: number; cliente: string; }> => {

        let result = await createQueryBuilder('Pcrc')
            .innerJoinAndSelect('Pcrc.id_dp_clientes', 'cliente')
            .where('Pcrc.id_dp_pcrc = :pcrc', { pcrc: idPcrc })
            .select(['cliente.id_dp_clientes as id', 'cliente.cliente as cliente'])
            .getRawOne()

        return result
    }

    getUserPcrc = async (cedula: string) => {

        if (cedula == '1036673423') {
            let result =  await this.getAllPcrc()
            return this.sortBy(result, 'cliente')
        }

        let user = await this.userIndex.where({ cedula: cedula }, '0', '1')

        if (!!user.length) {

            if (user[0].pcrc.includes('todos')) {
                return this.getAllPcrc()
            } else if (user[0].pcrc.length) {
                let pcrcsEnElastic = await createQueryBuilder<cliente>('Clientes')
                    .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
                    .where('pcrc.estado = 1')
                    .andWhere('Clientes.estado = 1')
                    .andWhere('pcrc.id_dp_pcrc IN (:...idsPcrc)', { idsPcrc: user[0].pcrc })
                    .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
                    .getMany()

                let pcrcsPorDefecto = await this.getDefaultsPcrc(cedula)

                return this.sortBy([ ...pcrcsEnElastic , ...pcrcsPorDefecto ], 'cliente')

            } else {
                return this.sortBy(await this.getDefaultsPcrc(cedula), 'cliente')  
            }

        } else {
            return this.sortBy(await this.getDefaultsPcrc(cedula), 'cliente')  
        }
    }

    private getDefaultsPcrc = async (cedula: string) => {
        return await createQueryBuilder<cliente>('Clientes')
        .innerJoinAndSelect('Clientes.pcrcs', 'pcrc')
        .innerJoin(qb =>
            qb.select(['Personal.cod_pcrc as cod_pcrc'])
                .from(Personal, 'Personal')
                .innerJoin(qb =>
                    qb.select(['max(Personal.fecha_actual) as fecha', 'Personal.documento as documento'])
                        .from(Personal, 'Personal')
                        .groupBy('Personal.documento')
                    , 'fechas'
                    , 'Personal.fecha_actual = fechas.fecha and fechas.documento = Personal.documento'
                )
                .where('Personal.documento = :documento', { documento: cedula })
            , 'accesos'
            , 'accesos.cod_pcrc = pcrc.cod_pcrc'
        )
        .where('pcrc.estado = 1')
        .andWhere('Clientes.estado = 1')
        .select(['Clientes.id_dp_clientes', 'Clientes.cliente', 'pcrc.id_dp_pcrc', 'pcrc.cod_pcrc', 'pcrc.pcrc'])
        .getMany()
    } 

    postUserPcrc = async (cedula: string, idPcrc: string) => {

        let accesoTodos = await this.userIndex.where({ cedula, pcrc: 'todos' })

        if (!!accesoTodos.length) {
            throw new ConflictException('el usuario ya tiene acceso a este pcrc')
        } else if (idPcrc == 'todos') {

            await this.deleteUserPcrc(cedula, 'todos')

            await this.userIndex.updatePartialDocument(cedula, { pcrc: [idPcrc] })

            return { status: 'created' }

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

                    try {
                        let usuarioExiste = await this.userIndex.getById(cedula)

                        let updateQuery = {
                            'source': 'ctx._source.pcrc.add(params.pcrc)',
                            'lang': 'painless',
                            'params': {
                                'pcrc': idPcrc
                            }
                        };

                        this.userIndex.updateScript(cedula, updateQuery);

                    } catch (error) {

                        if (!error.meta.body.found) {

                            let datosPersonales = await createQueryBuilder("datosPersonales")
                                .where('datosPersonales.documento = :cedula',{ cedula: cedula })
                                .getOne()

                                // console.log(sql)

                            return this.userModel.createUser({
                                cedula: cedula,
                                nombre: datosPersonales['nombre_completo'],
                                pcrc: [idPcrc],
                                rol: 'user'
                            })
                        }
                    }
                }

                return { status: 'created' }
            }
        }
    }

    deleteUserPcrc = async (cedula: string, pcrc: string) => {

        if (pcrc == 'todos') {
            await this.userIndex.updatePartialDocument(cedula, { pcrc: [] })
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

        let jarvisUsers: { documento: string, nombre:string }[] = await createQueryBuilder(Personal)
            .innerJoin(qb =>
                qb.select(['max(distri.fecha_actual) as fecha', 'distri.documento as documento'])
                    .from(Personal, 'distri')
                    .groupBy('distri.documento')
                , 'fechas'
                , 'Personal.fecha_actual = fechas.fecha and fechas.documento = Personal.documento'
            ).innerJoinAndSelect('Pcrc', 'pcrc', 'pcrc.cod_pcrc = Personal.cod_pcrc and pcrc.estado = 1 and pcrc.id_dp_pcrc = :idPcrc', { idPcrc: idPcrc })
            .innerJoinAndSelect('Personal.id_dp_datos_generales', 'datos')
            .select(['Personal.documento as documento','datos.nombre_completo as nombre'])
            .getRawMany()

        let existingUsers = await this.userIndex.query({
            query: {
                "terms": {
                    "cedula": jarvisUsers.map(result => result.documento)
                }
            }
        });

        let newJarvisUsers = jarvisUsers.map(user => {
            let existingUser = existingUsers.find(existingUser => existingUser.cedula == user.documento)

            if(existingUser){
               return existingUser
            } else {
                return {
                        cedula:user.documento,
                        nombre:user.nombre,
                        rol: 'user',
                        pcrc:[idPcrc],
                    }
                
            }

        })

        let extraUsers = await this.userIndex.query({
            query: {
                bool: {                    
                    must: [
                        {
                            terms: {
                                pcrc: [idPcrc,'todos']
                            }
                        }
                    ]
                }
            }
        });

        return newJarvisUsers.concat(extraUsers).sort()
    }

 
}