import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";


export class articleChanges {
    eventDate:number;
    articleId:string;
    user:string;
    cliente:string;
    pcrc:string;
    category:string;
    event:string;
    articlecontent:string;
    previoustate:string;
}

@Injectable()
export class ArticleChangesIndex extends Esindex<articleChanges> {

    constructor(){
        super('articlechanges')
    }

}