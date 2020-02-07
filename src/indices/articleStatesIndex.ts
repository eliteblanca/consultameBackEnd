import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class ArticleState {
    articleId:string
    cliente:string
    pcrc:string
    category:string
    state:string
    initialDate:number
    finalDate?:number
    initialDateUser:string
    finalDateUser?:string
}

@Injectable()
export class ArticleStateIndex extends Esindex<ArticleState> {
    constructor(){
        super('articlestates')
    }
}