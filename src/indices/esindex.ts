import { Client, ClientOptions, ApiResponse, RequestParams } from "@elastic/elasticsearch";
import { help } from "../helpers/helper";
import * as R from 'remeda';
import { Article } from "src/services/articles-model.service";

const PUNTO_DE_ENLACE: string = "https://search-multiconsulta-focy72himmej26z3i6sqv56pp4.us-west-1.es.amazonaws.com";

export class Esindex<T> {

    constructor(protected index:string) {
        this.esClient = new Client({
            node: PUNTO_DE_ENLACE,
            requestTimeout: 3000
        })
    }

    protected readonly esClient: Client;

    public async create(doc: T):Promise<T & { id: string; }> {
        let result = await this.esClient.index({
            index: this.index,
            refresh: 'true',
            body: doc
        })

        return R.addProp(doc, 'id', result.body._id)
    }

    public async getById(id:string):Promise<T & { id: string; }>{
        let result = await this.esClient.get({
            id: id,
            index: this.index,
            type: '_doc'
        })

        return R.addProp(result.body._source,'id',result.body._id);
    }

    protected async query(query:RequestParams.Search):Promise<(T & { id: string; })[]>{
        let result = await this.esClient.search(query)
        
        return R.map(result.body.hits.hits, (x:any) => R.addProp(x._source,'id',x._id) )
    }

    public async where(ops:Partial<T>):Promise<(T & { id: string; })[]>{

        let result = await this.esClient.search({
            index: this.index,
            body: {
                query: {
                    bool: {
                        filter: R.pipe(
                            R.toPairs(ops),
                            R.map(pair=>R.objOf(pair[1],pair[0])),
                            R.map(obj=>R.objOf(obj,'term'))
                        )
                    }
                }
            }
        })

        return R.map(result.body.hits.hits, (x:any) => R.addProp(x._source,'id',x._id) )

    }

    public async all():Promise<(T & { id: string; })[]>{
        return this.query({
            index: this.index,
            body: {
                query: {
                    "match_all": {}
                }
            }
        })
    }

}