import { Injectable } from '@nestjs/common';
import { Esindex } from "./esindex";

export interface comment {
    article:string;
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
    category:string;
}

@Injectable()
export class CommentsIndexService extends Esindex<comment> {
    constructor(){
        super('comments')
    }
    
}
