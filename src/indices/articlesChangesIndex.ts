import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";


export class articleChanges {
    eventDate:number;
    articulo:string;
    user:string;
    cliente:string;
    pcrc:string;
    categoria:string;
    event:string;
    articlecontent:string;
    previoustate:string;
    articlestate:string;
}

@Injectable()
export class ArticleChangesIndex extends Esindex<articleChanges> {

    constructor(){
        super('articlechanges')
    }

}