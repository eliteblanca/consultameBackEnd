import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class articleView {
    initialDate:number;
    finalDate:number;
    articleId:string;
    duration:number;
    user:string;
    cliente:string;
    pcrc:string;
    category:string;
    director:string;
    gerente:string;
    coordinador:string;
    lider:string;
}

@Injectable()
export class ArticlesViewsIndex extends Esindex<articleView> {

    constructor(){
        super('views')
    }

}