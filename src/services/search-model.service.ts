import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { SearchsIndex, search } from "../indices/searchIndex";
import { IsNotEmpty, Length } from 'class-validator';

export class newSearchDTO {
    @IsNotEmpty({ message: 'debes proporcionar una query' })
    query

    @IsNotEmpty({ message: 'debes proporcionar una sublinea' })
    subline
}

@Injectable()
export class SearchModelService extends GenericModel {

    constructor(private searchsIndex: SearchsIndex) {
        super()
    }

    private suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];

    private async getByQuery(subline: string, query: string): Promise<(search & { id: string; })[]> {

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

    private async increaseSearchCount(id: string): Promise<any> {
        return await this.searchsIndex.updateScript(id, { "source": "ctx._source.searches += 1" })
    }

    public async newSearch(query: string, subline: string, userId:string): Promise<any> {
        await this.searchsIndex.create({
            publicationDate:(new Date()).getTime(),
            query:query,
            subline:subline,
            user:userId  
        })
    }

    public async getSuggestions(input: string, subline: string): Promise<(search & { id: string; })[]> {

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

    public async getAll(): Promise<(search & { id: string; })[]> {
        try {
            return await this.searchsIndex.all()
        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    public async getBySubline(subline: string): Promise<(search & { id: string; })[]> {
        try {
            return await this.searchsIndex.where({ subline: subline })
        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

}