import { Client } from "@elastic/elasticsearch";
import * as fs from 'fs';

const PUNTO_DE_ENLACE: string = process.env.ES_PUNTO_ENLACE;

export class GenericModel {
    constructor() {
        this.esClient = new Client({
            node: PUNTO_DE_ENLACE,
            requestTimeout: 10000,
            ssl: {
                rejectUnauthorized: false
            }
        })
    }

    protected readonly esClient: Client;

    protected async indexDocument<T>(doc: T, index: string) {
        try {
            return await this.esClient.index({
                index: index,
                refresh: 'true',
                body: doc
            })
        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    protected async deleteDocument(id: string, index: string): Promise<any> {
        try {
            await this.esClient.delete({
                id: id,
                index: index,
                type: '_doc'
            })

            return { status: "200", mesage: "eliminado con exito" }

        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    // Deprecated
    // private async asyncForEach(array, callback) {
    //     for (let index = 0; index < array.length; index++) {
    //         await callback(array[index], index, array);
    //     }
    // }

    // Deprecated
    // private async createBulk<T>(docs:T[],index:string , ops?:{validate:boolean}):Promise<any>{
    //     let bulk: any[] = [];
    //     await this.asyncForEach(docs, async (doc) => {
    //         if(ops && ops.validate){
    //             let validationErrors = await validate(doc)
    //             console.log('validationErrors');
    //             console.log(validationErrors);
    //         }
    //         bulk.push({ index: { _index: index.toLowerCase(), _type: '_doc' } });
    //         bulk.push(doc);
    //     });
    //     return bulk
    //   }

    // Deprecated
    // protected async indexDocuments<T>(docs: T[], index: string, ops?:{validate:boolean}):Promise<T[]> {

    //     let bulk: any[] = await this.createBulk<T>(docs,index,ops);

    //     console.log('---------')
    //     console.log(bulk)

    //     try {
    //         let result = await this.esClient.bulk({
    //             index: index.toLowerCase(),
    //             refresh: 'true',
    //             body: bulk
    //         })

    //         let created:T[] = result.body.items.map((item,index)=>{
    //             return { ...{ id : item.index._id} , ...docs[index] }
    //         })

    //         return created;
    //     } catch (error) {
    //         console.log(error.body.error)
    //     }
    // }
}
