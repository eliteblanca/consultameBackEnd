import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";

type search = {
    query:string,
    line:string,
    subline:string,
    searches:number
};

@Injectable()
export class SearchModelService extends GenericModel{
    
    constructor() {
        super()
    }

    private  suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];
  

    public async getSearch(options: { query: string; line: string; subline: string; }): Promise<any[]> {
        let result = await this.esClient.search({
            index: "searchs",
            body: {
                query: {
                    bool: {
                        filter: [
                            { term: { line: options.line } },
                            { term: { subline: options.subline } },
                            { term: { query: options.query } }
                        ]
                    }
                }
            }
        })

        return result.body.hits.hits.map(searchSource => {
            return { id: searchSource._id, ...searchSource._source }
        })

    }

    public increaseSearchCount(id: string): Promise<any> {
        return this.esClient.update({
            id: id, index: 'searchs', type: '_doc', body: {
                script: {
                    "source": "ctx._source.searches += 1"
                }
            }
        })
    }

    public async newSearch(options: { query: string; line: string; subline: string; }):Promise<any>{
        let searchs = await this.getSearch(options)

        if (searchs.length) {
            await this.increaseSearchCount(searchs[0]['id'])
        } else {
            await this.indexDocuments<search>([{ searches: 1, ...options }], 'searchs')
        }
    }

    public getSuggestions(input:string, subline:string):String[]{
        return this.suggestionList;
    }

}
