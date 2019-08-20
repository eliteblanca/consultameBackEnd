import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { SearchsIndex } from "../indices/searchIndex";
import * as R from 'remeda';

type search = {
    query:string,
    line:string,
    subline:string,
    searches:number
};  

@Injectable()
export class SearchModelService extends GenericModel{
    
    constructor(private searchsIndex:SearchsIndex) {
        super()
    }

    private  suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];
   
    public increaseSearchCount(id: string): Promise<any> {
        return this.searchsIndex.update(id,{ "source": "ctx._source.searches += 1"})
    }

    public async newSearch(options: { query: string; line: string; subline: string; }):Promise<any>{
        let searchs = await this.searchsIndex.where(R.omit(options,['line']))

        if (searchs.length) {
            await this.increaseSearchCount(searchs[0]['id'])
        } else {
            await this.searchsIndex.create({ searches: 1, ...options })
        }
    }

    public async getSuggestions(input:string, subline:string):Promise<(search & { id: string; })[]>  {

        let query = {
            query: {
                bool: {
                    must: [
                        {
                            multi_match: {
                                "query": input,
                                "type": "bool_prefix",
                                "fields": ["query.full", "query.full._2gram", "query.full._3gram"]
                            }
                        }
                    ],
                    filter: [
                        { "term": { "subline": subline } }
                    ]
                }
            }
        }

        return await this.searchsIndex.query(query)
    }

}