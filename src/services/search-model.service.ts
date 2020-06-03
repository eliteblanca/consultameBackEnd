import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { SearchsIndex, search } from "../indices/searchIndex";
import { IsNotEmpty, Length } from 'class-validator';
import { ArticleIndex } from "../indices/articleIndex";

export class newSearchDTO {
    @IsNotEmpty({ message: 'debes proporcionar una query' })
    query

    @IsNotEmpty({ message: 'debes proporcionar una sublinea' })
    subline
}

@Injectable()
export class SearchModelService extends GenericModel {

    // constructor(
    //     private searchsIndex: SearchsIndex,
    //     private articleIndex: ArticleIndex,
    // ) {
    //     super()
    // }

    // public async newSearch(query: string, subline: string, userId:string): Promise<any> {
    //     await this.searchsIndex.create({
    //         publicationDate:(new Date()).getTime(),
    //         query:query,
    //         didyoumean:query,
    //         subline:subline,
    //         user:userId
    //     })
    // }

    // public async getSuggestions(input: string, subline: string): Promise<string[]> {

    //     try {

    //         let fraseCorregida = await this.getDidYouMean(input)

    //         console.log(input)
    //         console.log(fraseCorregida)

    //         let query = {
    //             suggest: {
    //                 sugerencias : {
    //                     prefix : fraseCorregida,
    //                     completion : {
    //                         field : "query",
    //                         skip_duplicates:true,
    //                         contexts: {
    //                             subline: [ subline ]
    //                         }
    //                     }
    //                 }
    //             }
    //         }

    //         let result = await this.searchsIndex.query(query)

    //         return result.body.suggest.sugerencias[0].options.map(op => op.text)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // public async getDidYouMean(input: string): Promise<string> {

    //     try {

    //         let query = {
    //             suggest: {
    //                 sugerencias : {
    //                     text : input,
    //                     term : {
    //                         analyzer: "spanish",
    //                         field : "content",
    //                         sort : 'score',
    //                         suggest_mode : 'missing',
    //                         max_edits : 2,
    //                         prefix_length: 3
    //                     }
    //                 }
    //             }
    //         }

    //         let result = await this.articleIndex.didYouMean(query)            

    //         let replaceMents = result.body.suggest.sugerencias.map(suj => {
    //             if( suj.options.length ){
    //                 return { offset: suj.offset , length: suj.length, value: suj.options[0].text }
    //             }

    //             return null
    //         }).filter(data => data)

    //         for(var i = replaceMents.length - 1; i >= 0 ; i--){
    //             input = input.slice(0,replaceMents[i].offset) + replaceMents[i].value + input.slice(replaceMents[i].offset + replaceMents[i].length)
    //         }

    //         return input

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // public async getAll(): Promise<(search & { id: string; })[]> {
    //     try {
    //         return await this.searchsIndex.all()
    //     } catch (error) {
    //         console.log(error.meta.body.error)
    //     }
    // }

    // public async getBySubline(subline: string): Promise<(search & { id: string; })[]> {
    //     try {
    //         return await this.searchsIndex.where({ subline: subline })
    //     } catch (error) {
    //         console.log(error.meta.body.error)
    //     }
    // }

}