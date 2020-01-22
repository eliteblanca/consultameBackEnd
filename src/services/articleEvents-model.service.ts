import { Injectable } from '@nestjs/common';
import * as async from 'async';
import * as R from 'remeda';
import { Article, ArticleIndex } from '../indices/articleIndex';
import { articleEvent, ArticlesEventsIndex } from "../indices/articlesEventsIndex";
import { ArticleStateIndex } from "../indices/articleStatesIndex";
import { CargosModelService } from "./cargos-model.service";
import { FavoriteStatesIndex } from "../indices/favoriteStatesIndex";

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
        private articlesEventsIndex: ArticlesEventsIndex,
        private cargosModel: CargosModelService,
        private articleIndex: ArticleIndex,
        private articleStateIndex: ArticleStateIndex,
        private favoriteStatesIndex: FavoriteStatesIndex
    ) { }

    createEvent = async (article: Article & { id: string; } | string, userId: string, event: articleEvent['event']) => {

        if (typeof article == 'string') {

            let articleObj = await this.articleIndex.getById(article)

            let bossInfo = await this.cargosModel.getAllBoss(userId)

            let view: articleEvent = {
                articleId: articleObj.id,
                category: articleObj.category,
                cliente: articleObj.cliente,
                creator: articleObj.creator,
                modificationDate: articleObj.modificationDate,
                modificationUser: articleObj.modificationUser,
                pcrc: articleObj.pcrc,
                publicationDate: articleObj.publicationDate,
                userId: userId,
                coordinador: bossInfo.coordinador,
                director: bossInfo.director,
                gerente: bossInfo.gerente,
                lider: bossInfo.lider,
                eventDate: (new Date).getTime(),
                event: event
            }

            return await this.articlesEventsIndex.create(view)

        } else {
            let bossInfo = await this.cargosModel.getAllBoss(userId)

            let view: articleEvent = {
                articleId: article.id,
                category: article.category,
                cliente: article.cliente,
                creator: article.creator,
                modificationDate: article.modificationDate,
                modificationUser: article.modificationUser,
                pcrc: article.pcrc,
                publicationDate: article.publicationDate,
                userId: userId,
                coordinador: bossInfo.coordinador,
                director: bossInfo.director,
                gerente: bossInfo.gerente,
                lider: bossInfo.lider,
                eventDate: (new Date).getTime(),
                event: event
            }

            return await this.articlesEventsIndex.create(view)
        }

    }

    getEventCountBy = async (event: articleEvent['event'], filters: { filter: string, value: string }[], fromdate: string, todate: string) => {

        let filtersObj: any[] = [
            { term: { event: event } },
            { range: { eventDate: { lt: todate } } },
            { range: { eventDate: { gt: fromdate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, eventCategories[filter.filter]) }
            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            }
        }

        let result = await this.articlesEventsIndex.count(query)

        return {
            value: result
        }
    }

    getArticlesCountBy = async (fromdate: string, state:string, filters: { filter: string, value: string }[]) => {

            let filtersObj: any[] = [
                { term: { state: state } },
                { range: { initialDate: { lt: fromdate } } },
                { range: { finalDate: { gt: fromdate } } }
            ]

            await async.each(filters, async ({ filter, value }:{ filter: string, value: string }) => {

                var newFilter:any

                if(filter == 'gerente'){
                    let pcrcs = await this.cargosModel.getGerentePcrcs(value)

                    newFilter = {
                        terms : {
                            pcrc : pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())
                        }
                    }

                } else if( filter == 'director' ){
                    let pcrcs = await this.cargosModel.getDirectorPcrc(value)

                    newFilter = {
                        terms : {
                            pcrc : pcrcs.map(pcrc => pcrc.id_dp_pcrc.toString())
                        }
                    }

                } else if(filter == 'coordinador' || filter == 'lider'){

                    let pcrc = await this.cargosModel.getUserPcrc(value)

                    newFilter = { term: R.objOf(pcrc.id_dp_pcrc, eventCategories['pcrc']) }

                } else {

                    newFilter = { term: R.objOf(value, eventCategories[filter]) }

                }

                filtersObj.push(newFilter)
            })

            let query = {
                query: {
                    bool: {
                        filter: filtersObj
                    }
                }
            }

            let result = await this.articleStateIndex.count(query)

            return {
                value: result
            }
    }

    getFavoritesCountBy = async (fromdate: string, filters: { filter: string, value: string }[], state:string) => {
        let filtersObj: any[] = [            
            { term:  { state: state } },
            { range: { initialDate: { lt: fromdate } } },
            { range: { finalDate: { gt: fromdate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, eventCategories[filter.filter]) }
            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            }
        }

        let result = await this.favoriteStatesIndex.count(query)

        return {
            value: result
        }
    }

}