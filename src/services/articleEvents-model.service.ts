import { Injectable } from '@nestjs/common';
import { Article, ArticleIndex } from '../indices/articleIndex';
import { ArticlesEventsIndex, articleEvent } from "../indices/articlesEventsIndex";
import { CargosModelService } from "./cargos-model.service";
import * as R from 'remeda';

enum eventCategories {
    categoria = 'category',
    pcrc = 'pcrc',
    cliente = 'cliente',
    articulo = 'articleId',
    director = 'director',
    coordinador = 'coordinador',
    gerente = 'gerente',
    lider = 'lider'
};

@Injectable()
export class ArticleEventsModelService {

    constructor(
        private articlesEventsIndex:ArticlesEventsIndex,
        private cargosModel:CargosModelService,
        private ArticleIndex:ArticleIndex
    ) {  }
    
    async createEvent(article:Article & { id: string; } | string, userId:string, event:articleEvent['event']){

        if(typeof article == 'string'){

            let articleObj = await this.ArticleIndex.getById(article)

            let bossInfo = await this.cargosModel.getAllBoss(userId)
    
            let view: articleEvent = {
                articleId:articleObj.id,
                category:articleObj.category,
                cliente:articleObj.cliente,
                creator:articleObj.creator,
                modificationDate:articleObj.modificationDate,
                modificationUser:articleObj.modificationUser,
                pcrc:articleObj.pcrc,
                publicationDate:articleObj.publicationDate,
                userId:userId,
                coordinador:bossInfo.coordinador,
                director:bossInfo.director,
                gerente:bossInfo.gerente,
                lider:bossInfo.lider,
                eventDate:(new Date).getTime(),
                event:event
            }

            return await this.articlesEventsIndex.create(view)

        } else {
            let bossInfo = await this.cargosModel.getAllBoss(userId)
    
            let view: articleEvent = {
                articleId:article.id,
                category:article.category,
                cliente:article.cliente,
                creator:article.creator,
                modificationDate:article.modificationDate,
                modificationUser:article.modificationUser,
                pcrc:article.pcrc,
                publicationDate:article.publicationDate,
                userId:userId,
                coordinador:bossInfo.coordinador,
                director:bossInfo.director,
                gerente:bossInfo.gerente,
                lider:bossInfo.lider,
                eventDate:(new Date).getTime(),
                event:event
            }

            return await this.articlesEventsIndex.create(view)
        }


    }

    async getEventCountBy(event:articleEvent['event'], filterfield:string, filtervalue:string, fromdate: string, todate: string){
        if( !!eventCategories[filterfield] ){

            let query = {
                query: {
                    bool: {
                        filter: [
                            { term: R.objOf(filtervalue, eventCategories[filterfield] ) },
                            { term:  { event: event } },
                            { range: { eventDate: { lt: todate } } },
                            { range: { eventDate: { gt: fromdate } } }
                        ]
                    }
                }
            }

            return await this.articlesEventsIndex.count(query);
            // return await this.articlesViewsIndex.all)();

        } else {
            
        }
    }

}