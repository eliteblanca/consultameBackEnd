import { ApiResponse, Client, RequestParams } from "@elastic/elasticsearch";
import * as fs from 'fs';
import * as R from 'remeda';

const PUNTO_DE_ENLACE: string = "https://search-consultamekonecta-xsvrb6f5gky3alwbp3xw7v4e74.us-west-1.es.amazonaws.com";

export class Esindex<T> {

    constructor(protected index: string) {

        if (process.env.NODE_ENV == 'development') {
            this.esClient = new Client({
                node: PUNTO_DE_ENLACE,
                requestTimeout: 3000
            })
        } else {
            this.esClient = new Client({
                node: PUNTO_DE_ENLACE,
                requestTimeout: 3000,
                ssl: {
                    ca: fs.readFileSync('../../../../../../../../cert.pem'),
                    rejectUnauthorized: true
                }
            })

        }
    }

    protected readonly esClient: Client;

    private createBody = R.objOf('body')

    protected createRequest = x => R.addProp(R.objOf('body')(x), 'index', this.index)

    public create = async (doc: T, id?: string): Promise<T & { id: string; }> => {
        let result: ApiResponse
        if (typeof id == 'undefined') {
            result = await this.esClient.index({
                index: this.index,
                refresh: 'true',
                body: doc
            })
        } else {
            result = await this.esClient.index({
                id: id,
                index: this.index,
                refresh: 'true',
                body: doc
            })
        }

        return R.addProp(doc, 'id', result.body._id)
    }

    public getById = async (id: string): Promise<T & { id: string; }> => {
        let result = await this.esClient.get({
            id: id,
            index: this.index,
            type: '_doc'
        })

        return R.addProp(result.body._source, 'id', result.body._id);
    }

    public query = async (query: object): Promise<(T & { id: string; })[]> => {

        let queryObj: RequestParams.Search = this.createRequest(query)

        let result = await this.esClient.search(queryObj)

        return R.map((x: any) => R.addProp(x._source, 'id', x._id))(result.body.hits.hits)
    }

    public where = async (ops: { [P in keyof T]?: any; }, from?: string, size?: string, order?: { orderby: keyof T, order: 'asc' | 'desc' }): Promise<(T & { id: string; })[]> => {

        let result: ApiResponse<any, any>;

        if (!!from && !!size && !!order) {

            result = await this.esClient.search({
                index: this.index,
                body: {
                    query: {
                        bool: {
                            filter: R.pipe(
                                R.toPairs(ops),
                                R.map(pair => R.objOf(pair[1], pair[0])),
                                R.map(obj => R.objOf(obj, 'term'))
                            )
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size),
                    sort: [
                        R.objOf(order.orderby.toString())({ order: order.order }) // R.objOf(key)(value) = {key : value}
                    ]
                }
            })

        } else if (!!from && !!size && !!!order) {

            result = await this.esClient.search({
                index: this.index,
                body: {
                    query: {
                        bool: {
                            filter: R.pipe(
                                R.toPairs(ops),
                                R.map(pair => R.objOf(pair[1], pair[0])),
                                R.map(obj => R.objOf(obj, 'term'))
                            )
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size)
                }
            })

        } else {
            result = await this.esClient.search({
                index: this.index,
                body: {
                    query: {
                        bool: {
                            filter: R.pipe(
                                R.toPairs(ops),
                                R.map(pair => R.objOf(pair[1], pair[0])),
                                R.map(obj => R.objOf(obj, 'term'))
                            )
                        }
                    }
                }
            })
        }

        return R.map(result.body.hits.hits, (x: any) => R.addProp(x._source, 'id', x._id))

    }

    public deleteWhere = async (ops: Partial<T>): Promise<{ deleted: number }> => {

        let queryObj: RequestParams.DeleteByQuery = this.createRequest({
            query: {
                bool: {
                    filter: R.pipe(
                        R.toPairs(ops),
                        R.map(pair => R.objOf(pair[1], pair[0])),
                        R.map(obj => R.objOf(obj, 'term'))
                    )
                }
            }
        })

        let result = await this.esClient.deleteByQuery(queryObj)

        return { deleted: result.body.deleted }
    }

    public deleteByQuery = async (query: object): Promise<{ deleted: number }> => {

        let queryObj: RequestParams.DeleteByQuery = this.createRequest(query)

        let result = await this.esClient.deleteByQuery(queryObj)

        return { deleted: result.body.deleted }
    }

    public delete = async (id: string): Promise<any> => {
        await this.esClient.delete({
            id: id,
            index: this.index
        })

        return { status: "deleted" }
    }

    public all = async (): Promise<(T & { id: string; })[]> => {
        return this.query({
            query: {
                "match_all": {}
            }
        })
    }

    public updateScript = async (id: string, script: object): Promise<void> => {
        let queryObj: RequestParams.Update = R.addProp(this.createRequest({ script: script }), 'id', id)
        await this.esClient.update(queryObj)
    }

    public updatePartialDocument = async (id: string, partial: Partial<T>): Promise<any> => {
        let result = await this.esClient.update({
            id: id,
            index: this.index,
            refresh: 'true',
            body: { doc: partial }
        })

        return { status: result.body.result }
    }

}