import { Injectable } from '@nestjs/common';
import { Esindex } from "./esindex";

export interface comment {
    articulo:string;
    publicationDate:number;
    user:string;
    username:string;
    replyTo:string;
    text:string;
    director:string;
    gerente:string;
    coordinador:string;
    lider:string;
    cliente:string;
    pcrc:string;
    categoria:string;
}

@Injectable()
export class CommentsIndexService extends Esindex<comment> {
    constructor(){
        super('comments')
    }
    
}
