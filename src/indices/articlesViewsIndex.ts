import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class articleView {
    articleId:string;
    userId:string;
    publicationDate:number;
    modificationDate:number;
    modificationUser:string;
    creator:string;
    cliente:string;
    pcrc:string;
    category:string;
    viewDate:number;
    director:string;
    gerente:string;
    coordinador:string;
    lider:string;
}

@Injectable()
export class ArticlesViewsIndex extends Esindex<articleView> {

    constructor(){
        super('articlesviews')
    }

}