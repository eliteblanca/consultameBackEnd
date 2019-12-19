import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class articleView {
    articleId:string;
    userId:string;
    publicationDate
    modificationDate
    modificationUser:string;
    creator:string;
    cliente:string;
    pcrc:string;
    category:string;
}

@Injectable()
export class ArticlesViewsIndex extends Esindex<articleView> {

    constructor(){
        super('articlesViews')
    }

}