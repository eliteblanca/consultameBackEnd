import { Injectable } from '@nestjs/common';
import { DiccionarioEjemplo } from "../diccionario-ejemplo";
import { Article } from 'src/article';

@Injectable()
export class ModelService {   

    private  suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];

    public getArticles(options: { query?: string; category?: string; line: string; subLine: string; }){
        let diccionario = new DiccionarioEjemplo();
        return diccionario.diccionarioArticles;
    }
    
    public getArticle(articleId:string):Article{
        let diccionario = new DiccionarioEjemplo();
        return diccionario.diccionarioArticles[0];
    }

    public getSuggestions(input):String[]{
        return this.suggestionList;
    }
}