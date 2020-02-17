import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface search {
    query:string,
    subline:string,
    user:string,
    publicationDate:number
}

@Injectable()
export class SearchsIndex extends Esindex<search> {
    constructor(){
        super('searchs')
    }

}