import { Injectable, HttpException } from '@nestjs/common';
import { ArticleIndex, Article } from "../indices/articleIndex";
import { IsNotEmpty, Length } from 'class-validator';
import * as R from 'remeda';

enum FiltersToFieldEnum {
    categoria = 'category',
    pcrc = 'pcrc',
    cliente = 'cliente'
};

enum DataToFieldEnum {
    views = 'views',
    // Lectures, = 
    favs = 'favorites',
    likes = 'likes',
    dislikes = 'disLikes'
};

@Injectable()
export class ReportsModelService {

    private aceptedFilterField = [
        'categoria',
        'pcrc',
        'cliente',

        'articulo',
        'director',
        'coordinador',
        'gerente',
        'lider'
    ]

    private aceptedData = [
        'views',
        'favs',	
        'likes',
        'dislikes',
        'articles',
        
        'lectures',
        'comments',
        'subcategoríes',
        'categories',
        'lines'
    ]    

    constructor(private articleIndex:ArticleIndex){  }

    getReport(fromdate: string, todate: string, filterfield: string, filtervalue: string, data: string): any {
        if( this.aceptedFilterField.includes(filterfield) && this.aceptedData.includes(data) ){
            
            if(!!FiltersToFieldEnum[filterfield] && !!DataToFieldEnum[data]){
                return this.articleIndex.aggsWhere( R.objOf(filtervalue, FiltersToFieldEnum[filterfield]), { op:"sum",field:DataToFieldEnum[data] })
            } else {

            }

        } else {
            let errorCode = 12;
            
            throw new HttpException({
                "error": `error code: ${errorCode}`,
                "message": "not_soported"
            }, 400)
        }
    }
}
