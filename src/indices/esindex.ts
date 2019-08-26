import { Client, ClientOptions, ApiResponse, RequestParams } from "@elastic/elasticsearch";
import * as R from 'remeda';

const PUNTO_DE_ENLACE: string = "https://search-multiconsulta-konecta-oxehhr2nsdrsr5ak6tj7hvw3pe.us-west-1.es.amazonaws.com";

export class Esindex<T> {

    constructor(protected index:string) {
        this.esClient = new Client({
            node: PUNTO_DE_ENLACE,
            requestTimeout: 3000
        })
    }

    protected readonly esClient: Client;

    private createBody = R.objOf('body')    

    private createRequest = x => R.addProp(R.objOf('body')(x),'index',this.index)   

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

    public async query(query:object):Promise<(T & { id: string; })[]>{
        
        let queryObj:RequestParams.Search =  this.createRequest(query)

        let result = await this.esClient.search(queryObj)
        
        return R.map((x:any) => R.addProp(x._source,'id',x._id))
              (result.body.hits.hits, )
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
                query: {
                    "match_all": {}
                }            
        })
    }

    public async update(id:string, script:object):Promise<void>{
        let queryObj:RequestParams.Update = R.addProp(this.createRequest({script:script}),'id',id)
        await this.esClient.update(queryObj)
    }

}