import { Injectable } from '@nestjs/common';
import * as async from 'async';
import * as R from 'remeda';
import { Article, ArticleIndex } from '../indices/articleIndex';
import { articleEvent, ArticlesEventsIndex } from "../indices/articlesEventsIndex";
import { ArticleStateIndex } from "../indices/articleStatesIndex";
import { CargosModelService } from "./cargos-model.service";
import { FavoriteStatesIndex } from "../indices/favoriteStatesIndex";
import { ArticlesViewsIndex, articleView } from "../indices/articleViewsIndex";
import { PcrcModelService, cliente } from "../services/pcrc-model.service";
import { CommentsIndexService } from "../indices/commentsIndex.service";
import { CategoriesModelService } from "../services/categories-model.service";
import { category } from "../indices/categoriesIndex";
import { ArticleChangesIndex } from "../indices/articlesChangesIndex";


@Injectable()
export class ArticleEventsModelService {

    constructor(
        private articlesEventsIndex: ArticlesEventsIndex,
        private cargosModel: CargosModelService,
        private articleIndex: ArticleIndex,
        private articleStateIndex: ArticleStateIndex,
        private favoriteStatesIndex: FavoriteStatesIndex,
        private articlesViewsIndex: ArticlesViewsIndex,
        private pcrcModel: PcrcModelService,
        private commentsIndex: CommentsIndexService,
        private categoriesModel: CategoriesModelService,
        private articleChangesIndex: ArticleChangesIndex
    ) { }

    createEvent = async (article: Article & { id: string; } | string, userId: string, event: articleEvent['event']) => {

        if (typeof article == 'string') {

            let articleObj = await this.articleIndex.getById(article)

            let bossInfo = await this.cargosModel.getAllBoss(userId)

            let view: articleEvent = {
                articulo: articleObj.id,
                categoria: articleObj.category,
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
                articulo: article.id,
                categoria: article.category,
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
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
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

    getEventsBy = async (event: articleEvent['event'], filters: { filter: string, value: string }[], fromdate: string, todate: string, from:number, to:number ) => {

        let filtersObj: any[] = [
            { term: { event: event } },
            { range: { eventDate: { lt: todate } } },
            { range: { eventDate: { gt: fromdate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
            filtersObj.push(newFilter)
        })
        
        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            },
            from: from,
            size: to,
            sort: [
                { eventDate :{ order: 'asc' }} // R.objOf(key)(value) = {key : value}
            ]
        }
            
        let result = await this.articlesEventsIndex.query(query)

        return result
        
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

                    newFilter = { term: R.objOf(pcrc.id_dp_pcrc, 'pcrc') }

                } else {

                    newFilter = { term: R.objOf(value, filter) }

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

    getVotesCountBy = async (fromdate: string, filters: { filter: string, value: string }[], state:string) => {
        let filtersObj: any[] = [            
            { term:  { state: state } },
            { range: { initialDate: { lt: fromdate } } },
            { range: { finalDate: { gt: fromdate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
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

    getViewsCountBy = async (todate: string, filters: { filter: keyof articleView, value: string }[], minDuration:number = 0, maxDuration:number = 999999999) => {


        let filtersObj: any[] = [      
            { range: { duration: { lt: maxDuration } } },
            { range: { duration: { gt: minDuration } } },
            { range: { initialDate: { lt: todate } } },
            { range: { finalDate: { lt: todate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            }
        }

        let result = await this.articlesViewsIndex.count(query)

        return {
            value: result
        }
    }    

    getViewsBy = async (todate: string, filters: { filter: keyof articleView, value: string }[], minDuration:number = 0, maxDuration:number = 999999999) => {

        let filtersObj: any[] = [      
            { range: { duration: { lt: maxDuration } } },
            { range: { duration: { gt: minDuration } } },
            { range: { initialDate: { lt: todate } } },
            { range: { finalDate: { lt: todate } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            }
        }

        let result = await this.articlesViewsIndex.query(query)

        return result
    } 

    getFullReport = async (filters: { filter: string, value: string }[], date: number, from:number, to:number) => {

        // -> articulos ordenados por titulo
        let filtersObj: any[] = [
            { term: { state: 'published' } },
            { range: { initialDate: { lt: date } } },
            { range: { finalDate: { gt: date } } }
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

                newFilter = { term: R.objOf(pcrc.id_dp_pcrc, 'pcrc') }

            } else {
                newFilter = { term: R.objOf(value, filter) }
            }

            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            },
            from: from,
            size: to,
            sort: [
                { initialDate :{ order: 'asc' }} // R.objOf(key)(value) = {key : value}
            ]
        }

        let articlesStates = await this.articleStateIndex.query(query)

        let articlesAux:any[] = articlesStates.map(article => article.articulo)        

        //totalItems

        let totalItems = await this.articleStateIndex.count({ query:query.query })

        // usuariosPorPcrc

        let pcrcs = [...new Set( articlesStates.map(articleInfo => articleInfo.pcrc)) ];

        let listOfPcrcsPromises = pcrcs.map(pcrc => {
            return async () => {
                return (await this.pcrcModel.getPcrcUsers(pcrc)).length
            }
        })

        let usuariosPorPcrcObj: { pcrc:string, usuarios:number}[] = (await async.parallel(listOfPcrcsPromises))
            .map((numeroUsuarios, index) => {
                return {
                    pcrc: pcrcs[index],
                    usuarios: numeroUsuarios
                }
            }
        )

        // ------------------------------------------------

        // articulos

        let listOfArticlePromises = articlesAux.map(articleId => {
            return async ()=>{
                return await this.articleIndex.getById(articleId)
            }
        })

        let articles:(Article & { id: string; })[] = await async.parallel(listOfArticlePromises)

        articles.forEach((article, index) => {
            articlesAux[index] = { articleId:articlesAux[index], title: articles[index].title }
        });

        // views

        let listOfArticleViewsPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getViewsCountBy(date.toString(), [{ filter:"articulo", value: article.articleId }])
            }
        })

        let views:{ value: number }[] = await async.parallel(listOfArticleViewsPromises)

        views.forEach((value, index) => {
            articlesAux[index].views = value.value
        });

        // // result = result.map()

        // likes

        let listOfArticleLikesPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getVotesCountBy(date.toString(), [{ filter:"articulo", value: article.articleId }], 'like')
            }
        })

        let likes:{ value: number }[] = await async.parallel(listOfArticleLikesPromises)

        likes.forEach((value, index) => {
            articlesAux[index].likes = value.value
        })

        // dislikes

        let listOfArticleDisLikesPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getVotesCountBy(date.toString(), [{ filter:"articulo", value: article.articleId }], 'dislike')
            }
        })

        let dislikes:{ value: number }[] = await async.parallel(listOfArticleDisLikesPromises)

        dislikes.forEach((value, index) => {
            articlesAux[index].dislikes = value.value
            articlesAux[index].indiceDisgusto = value.value == 0 ? 0 : value.value / (articlesAux[index].dislikes + articlesAux[index].likes)
            articlesAux[index].indiceGusto = articlesAux[index].likes == 0 ? 0 :articlesAux[index].likes / (articlesAux[index].dislikes + articlesAux[index].likes)
        })

        // favorites

        let listOfArticleFavoritesPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getVotesCountBy(date.toString(), [{ filter:"articulo", value: article.articleId }], 'favorite')
            }
        })

        let favorites:{ value: number }[] = await async.parallel(listOfArticleFavoritesPromises)

        favorites.forEach((value, index) => {
            articlesAux[index].favoritos = value.value
            articlesAux[index].favoritismo = (value.value / usuariosPorPcrcObj.find(pcrc => pcrc.pcrc == articlesStates[index].pcrc).usuarios).toFixed(2)
        })

        // comments



        let listOfArticleCommentsPromises = articlesAux.map(article => {
            return async ( ) => {

                let from = (new Date()).setFullYear(2000)

                return await this.getEventCountBy('comment', [{ filter:"articulo", value: article.articleId }], from.toString(), date.toString())
            }
        })

        let comments:{ value: number }[] = await async.parallel(listOfArticleCommentsPromises)

        comments.forEach((value, index) => {
            articlesAux[index].comments = value.value
        })

        // uso

        let listOfArticleUsersPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getViewsBy(date.toString(), [{ filter:"articulo", value: article.articleId }] )
            }
        })

        let articlesVistas = await async.parallel(listOfArticleUsersPromises)

        articlesVistas.forEach((articleVistas, index) => {
            let usuariosDistintos = [...new Set( articleVistas.map(vista => vista.user)) ].length
            let pcrcUsers = usuariosPorPcrcObj.find(pcrc => pcrc.pcrc == articlesStates[index].pcrc).usuarios
            articlesAux[index].indiceUso = (usuariosDistintos / pcrcUsers).toFixed(2)
        })

        // lecturabilidad

        let listOfArticleLecturesPromises = articlesAux.map(article => {
            return async ( ) => {
                return await this.getViewsCountBy(date.toString(), [{ filter:"articulo", value: article.articleId }],40000)
            }
        })

        let lectures:{ value: number }[] = await async.parallel(listOfArticleLecturesPromises)

        lectures.forEach((value, index) => {
            if(articlesAux[index].views){
                articlesAux[index].lecturabilidad = (value.value/articlesAux[index].views).toFixed(2)
            }else{
                articlesAux[index].lecturabilidad = '0%'
            }
        });

        return {
            totalItems:totalItems,
            items:articlesAux
        }

    }

    getCommentsBy = async (filters: { filter: string, value: string }[], dateFrom: number, dateTo: number, from:number, to:number) => {

        let filtersObj: any[] = [
            { range: { publicationDate: { lt: dateTo } } },
            { range: { publicationDate: { gt: dateFrom } } }
        ]

        filters.forEach(filter => {
            let newFilter = { term: R.objOf(filter.value, filter.filter) }
            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            },
            from: from,
            size: to,
            sort: [
                { publicationDate :{ order: 'asc' }} // R.objOf(key)(value) = {key : value}
            ]
        }

        let listaComentarios = await this.commentsIndex.query(query)

        // articulos

        let idsArticulos = [...new Set( listaComentarios.map(comentario => comentario.articulo))]

        let listaArticulosPromises = idsArticulos.map(articleId => {
            return async () => {
                return this.articleIndex.getById(articleId)
            }
        })

        let articulos:(Article & { id: string; })[] = await async.parallel(listaArticulosPromises)        

        let listaComentariosFinal = listaComentarios.map(comentario => {
            let tituloArticulo = articulos.find(articulo => articulo.id).title

            return {
                tituloArticulo: tituloArticulo,
                ...comentario
            }
        })

        // categoria

        let idsCategorias = [...new Set( listaComentarios.map(comentario => comentario.categoria))]

        let ListaCategoriasPromises = idsCategorias.map(id => {
            return async () => {
                return this.categoriesModel.getCategory(id)
            }
        })

        let categories:(category & { id: string; })[] = await async.parallel(ListaCategoriasPromises)

        listaComentariosFinal = listaComentariosFinal.map( comentario => {

            let indiceCategoria = idsCategorias.findIndex(id => id == comentario.categoria )

            let nombreCategoria = categories[indiceCategoria].name

            return {
                ...comentario,
                categoria: nombreCategoria
            }
        })

        // pcrc

        let idsPcrc = [...new Set( listaComentarios.map(comentario => comentario.pcrc))]

        let listOfPcrcPromises = idsPcrc.map(id => {
            return async () => {
                return this.pcrcModel.getPcrcInfo(id)
            }
        })

        let pcrcs:{ id_dp_pcrc:string, ciudad:string, cod_pcrc:string, pcrc:string }[] = await async.parallel(listOfPcrcPromises)

        listaComentariosFinal = listaComentariosFinal.map(comentario => {

            let pcrcIndice = idsPcrc.findIndex( id => id == comentario.pcrc )

            let nombrePcrc = pcrcs[pcrcIndice].pcrc

            return {
                ...comentario,
                pcrc: nombrePcrc
            }
        })

        // cliente

        let idsClientes = [...new Set( listaComentarios.map(comentario => comentario.cliente))]

        let listOfClientesPromises = idsClientes.map( idCliente => {
            return async () => {
                return this.pcrcModel.getClienteInfo(idCliente)
            }
        })

        let clientes: cliente[] = await async.parallel(listOfClientesPromises)

        listaComentariosFinal = listaComentariosFinal.map(comentario => {

            let clienteIndice = idsClientes.findIndex( id => id == comentario.cliente )

            let nombreCliente = clientes[clienteIndice].cliente

            return {
                ...comentario,
                cliente:nombreCliente
            }
        })

        //

        let totalItems = await this.commentsIndex.count({ query: query.query })

        return {
            totalItems: totalItems,
            items: listaComentariosFinal
        }
    }

    getChangesBy = async (filters: { filter: string, value: string }[], dateFrom: number, dateTo: number, from:number, to:number) => {

        let filtersObj: any[] = [
            { range: { eventDate: { lt: dateTo } } },
            { range: { eventDate: { gt: dateFrom } } }
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

                newFilter = { term: R.objOf(pcrc.id_dp_pcrc, 'pcrc') }

            } else {

                newFilter = { term: R.objOf(value, filter) }

            }

            filtersObj.push(newFilter)
        })

        let query = {
            query: {
                bool: {
                    filter: filtersObj
                }
            },
            from: from,
            size: to,
            sort: [
                { eventDate :{ order: 'desc' }}, // R.objOf(key)(value) = {key : value}
                { articulo :{ order: 'asc' }} // R.objOf(key)(value) = {key : value}
            ]
        }

        let totalItems = await this.articleChangesIndex.count({ query: query.query })

        let listaDeCambios = await this.articleChangesIndex.query(query)

        // categoria

        let idsCategorias = [...new Set( listaDeCambios.map(cambio => cambio.categoria))]

        let ListaCategoriasPromises = idsCategorias.map(id => {
            return async () => {
                return this.categoriesModel.getCategory(id)
            }
        })

        let categories:(category & { id: string; })[] = await async.parallel(ListaCategoriasPromises)

        listaDeCambios = listaDeCambios.map( cambio => {

            let indiceCategoria = idsCategorias.findIndex(id => id == cambio.categoria )

            let nombreCategoria = categories[indiceCategoria].name

            return {
                ...cambio,
                categoria: nombreCategoria
            }
        })

        // pcrc

        let idsPcrc = [...new Set( listaDeCambios.map(cambio => cambio.pcrc))]

        let listOfPcrcPromises = idsPcrc.map(id => {
            return async () => {
                return this.pcrcModel.getPcrcInfo(id)
            }
        })

        let pcrcs:{ id_dp_pcrc:string, ciudad:string, cod_pcrc:string, pcrc:string }[] = await async.parallel(listOfPcrcPromises)

        listaDeCambios = listaDeCambios.map(cambio => {

            let pcrcIndice = idsPcrc.findIndex( id => id == cambio.pcrc )

            let nombrePcrc = pcrcs[pcrcIndice].pcrc

            return {
                ...cambio,
                pcrc: nombrePcrc
            }
        })

        // cliente

        let idsClientes = [...new Set( listaDeCambios.map(cambio => cambio.cliente))]

        let listOfClientesPromises = idsClientes.map( idCliente => {
            return async () => {
                return this.pcrcModel.getClienteInfo(idCliente)
            }
        })

        let clientes: cliente[] = await async.parallel(listOfClientesPromises)

        listaDeCambios = listaDeCambios.map(cambio => {

            let clienteIndice = idsClientes.findIndex( id => id == cambio.cliente )

            let nombreCliente = clientes[clienteIndice].cliente

            return {
                ...cambio,
                cliente:nombreCliente
            }
        })


        // articulos

        let idsArticulos = [...new Set( listaDeCambios.map(cambio => cambio.articulo))]

        let listOfArticlesPromises = idsArticulos.map( idArticulo => {
            return async () => {
                return this.articleIndex.getById(idArticulo)
            }
        })

        let articulos:(Article & { id: string; })[] = await async.parallel(listOfArticlesPromises)

        listaDeCambios = listaDeCambios.map(cambio => {

            let articleIndice = idsArticulos.findIndex( id => id == cambio.articulo )

            let nombreArticulo = articulos[articleIndice].title

            return {
                ...cambio,
                articulo:nombreArticulo
            }
        })

        return {
            totalItems: totalItems,
            items: listaDeCambios
        }
    }

    getChange = async (id:string) => {
        return this.articleChangesIndex.getById(id)
    }

}