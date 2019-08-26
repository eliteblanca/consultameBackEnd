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
    
    private suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];

    private async getByQuery(subline:string, query:string):Promise<(search & { id: string; })[]>{

        return await this.searchsIndex.query({
            query: {
                bool: {
                    filter: [
                        { term: { subline: subline } },
                        { term: { "query.raw": query } }
                    ]
                }
            }
        })
        
    }

    public increaseSearchCount(id: string): Promise<any> {
        return this.searchsIndex.update(id,{ "source": "ctx._source.searches += 1"})
    }

    public async newSearch(options: { query: string; line: string; subline: string; }):Promise<any>{
        let searchs = await this.getByQuery(options.subline, options.query)

        if (searchs.length) {
            await this.increaseSearchCount(searchs[0]['id'])
        } else {
            await this.searchsIndex.create({ searches: 1, ...options })
        }
    }

    public async getSuggestions(input:string, subline:string):Promise<(search & { id: string; })[]>  {

        try {

            let query = {
                query: {
                    bool: {
                        must: {
                                match: {
                                    "query": input
                                },
                            },
                        filter: [
                            { "term": { "subline": subline } }
                        ]
                    }
                }
            }

            return await this.searchsIndex.query(query)

        } catch (error) {
            console.log(error.meta.body.error)    
        }
    }

    public async getAll():Promise<(search & { id: string; })[]>  {
        try {
            return await this.searchsIndex.all()
        } catch (error) {
            console.log(error.meta.body.error)    
        }
    }

    public async getBySubline(subline:string):Promise<(search & { id: string; })[]>  {
        try {
            return await this.searchsIndex.where({subline:subline})
        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

}