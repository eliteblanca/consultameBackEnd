import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";
import { ApiResponse } from "@elastic/elasticsearch";
import * as R from 'remeda';

export interface news {
    title:string;
    content:string;
    obj:string;
    attached:string[];
    publicationDate:number;
    modificationDate:number;
    modificationUser:string;
    creator:string;
    commentsList:string;
    state:string;
    subline:string;
    views:number;
}

@Injectable()
export class NewsIndex extends Esindex<news> {
    constructor(){
        super('news')
    }

}