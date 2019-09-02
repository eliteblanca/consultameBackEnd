import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface search {
    subline:string;
    query:string;
    searches:number;
}

@Injectable()
export class SearchsIndex extends Esindex<search> {
    constructor(){
        super('searchs')
    }

}