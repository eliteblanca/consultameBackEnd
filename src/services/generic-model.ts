import { Client } from "@elastic/elasticsearch";
import * as fs from 'fs';

const PUNTO_DE_ENLACE: string = process.env.ES_PUNTO_ENLACE;

export class GenericModel {
    // constructor() {
    //     this.esClient = new Client({
    //         node: PUNTO_DE_ENLACE,
    //         requestTimeout: 10000,
    //         ssl: {
    //             rejectUnauthorized: false
    //         }
    //     })
    // }

    // protected readonly esClient: Client;

    // protected async indexDocument<T>(doc: T, index: string) {
    //     try {
    //         return await this.esClient.index({
    //             index: index,
    //             refresh: 'true',
    //             body: doc
    //         })
    //     } catch (error) {
    //         console.log(error.meta.body.error)
    //     }
    // }

    // protected async deleteDocument(id: string, index: string): Promise<any> {
    //     try {
    //         await this.esClient.delete({
    //             id: id,
    //             index: index,
    //             type: '_doc'
    //         })

    //         return { status: "200", mesage: "eliminado con exito" }

    //     } catch (error) {
    //         console.log(error.meta.body.error)
    //     }
    // }

}
