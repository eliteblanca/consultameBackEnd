import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

interface Article {
    title:string;
    content:string;
    tags?:string[];
    resume?:string;
    attached?:string[];
    likes?:string[];//user ids
    disLikes?:string[];//user ids
    favorites?:string[];//user ids
    role?:"noticia"|"articulo";
    publicationDate?:number;
    modificationDate?:number;
    modificationUser?:string;
    creator?:string;
    id?:string;
    category:string;
    subLine:string;
    line:string;
}

@Injectable()
export class ArticleIndex extends Esindex<Article> {
    constructor(){
        super('articles')
    }

    public async getBycategory(category:string):Promise<Article[]>{
        return await this.where({category:category})
    }
}