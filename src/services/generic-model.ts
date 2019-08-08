import { Client, ClientOptions, ApiResponse } from "@elastic/elasticsearch";
import { EsClientService } from "../services/es-client.service";

const PUNTO_DE_ENLACE:string = "https://search-multiconsulta-focy72himmej26z3i6sqv56pp4.us-west-1.es.amazonaws.com";

export class GenericModel {
    constructor() {
        this.esClient = new Client({
            node:PUNTO_DE_ENLACE,
            requestTimeout:3000
        })
    }

    protected readonly esClient: Client;

    protected indexDocument<T>(doc: T, index: string) {
        return this.esClient.index({
            index: index,
            refresh: 'true',
            body: doc
        })
    }

    protected indexDocuments<T>(docs: T[], index: string) {

        let bulk: any[] = [];

        docs.forEach(doc => {
            bulk.push({ index: { _index: index.toLowerCase(), _type: '_doc' } });
            bulk.push(doc);
        });

        return this.esClient.bulk({
            index: index.toLowerCase(),
            refresh: 'true',
            body: bulk
        }).catch(err => {
            console.log(err.meta.body.error)
        })

    }

}
