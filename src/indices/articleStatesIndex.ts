import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class ArticleState {
    articulo:string
    cliente:string
    pcrc:string
    categoria:string
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