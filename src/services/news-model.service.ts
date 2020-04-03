import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { news, NewsIndex } from "../indices/newsIndex";
import { ArticleIndex, Article } from "../indices/articleIndex";
import { PcrcModelService } from "../services/pcrc-model.service";
import { ArticlesModelService } from "../services/articles-model.service";
import { ArticleChangesIndex } from "../indices/articlesChangesIndex";

export class postNewsDTO {

    @IsNotEmpty({ message: "debes proporcionar un titulo a la noticia" })
    title: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    content: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    obj: string;

    @IsNotEmpty({ message: "debes proporcionar un estado a la noticia" })
    state: news['state'];

    pcrc: string;
}

export class updateNewsDTO {

    @IsNotEmpty({ message: "debes proporcionar un titulo a la noticia" })
    title: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    content: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    obj: string;

    @IsNotEmpty({ message: "debes proporcionar un estado a la noticia" })
    state: news['state'];
}

@Injectable()
export class NewsModelService {

    constructor(
        private newsIndex: NewsIndex,
        private articleIndex: ArticleIndex,
        private pcrcModel: PcrcModelService,
        private articlesModel: ArticlesModelService,
        private articleChangesIndex: ArticleChangesIndex,
    ) { }

    getNews = async (pcrcId: string, from = '0', size = '20', date = (new Date).getTime().toString(), query?: string): Promise<(Article & { id: string; })[]> => {
        try {

            let esQuery: any;

            if (typeof query == 'undefined') {
                esQuery = {
                    query: {
                        bool: {
                            filter: [
                                { term: { type: 'news' } },
                                { term: { pcrc: pcrcId } },
                                { term: { state: 'published' } },
                                { range: { publicationDate: { lt: date } } }
                            ]
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size),
                    sort: [
                        { publicationDate: { order: "desc" } }
                    ],
                }

            } else {

                esQuery = {
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        'query': query,
                                        'fields': ['title^3', 'content^2']
                                    }
                                }
                            ],
                            filter: [
                                { term: { type: 'news' } },
                                { term: { pcrc: pcrcId } },
                                { term: { state: 'published' } },
                                { range: { publicationDate: { lt: date } } }
                            ]
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size),
                    sort: [
                        { publicationDate: { order: "desc" } }
                    ],
                }
            }

            return await this.articleIndex.query(esQuery)

        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    getSingleNews = async (newsId: string): Promise<(Article & { id: string; })> => {

        let news = await this.articleIndex.getById(newsId)

        if (!!news) {
            let result = await this.articleIndex.updateScript(newsId, {
                'source': 'ctx._source.views += 1',
                'lang': 'painless'
            });

            return news

        } else {
            throw new HttpException({
                "message": `Noticia no encontrada`
            }, 404)
        }
    }

    postNews = async (news: postNewsDTO, userId: string): Promise<(Article & { id: string; })> => {
            
            let cliente: { id: number; cliente: string; }    
    
            try {
                cliente = await this.pcrcModel.getClienteOfPcrc(news.pcrc);
            } catch (error) {
                if (error.meta.statusCode == 404) {
                    throw new NotFoundException('error al guardar la noticia');
                }

                throw error;
            }
    
            let articleExtras = {
                likes: [],
                disLikes: [],
                favorites: [],
                pcrc: news.pcrc,
                cliente: cliente.id.toString(),
                creator: userId,
                modificationUser: userId,
                publicationDate: (new Date).getTime(),
                modificationDate: (new Date).getTime(),
                views: 0,
                category: null,
                type: 'news'
            }
    
            let newArticle: Article = { ...articleExtras, ...news }
    
            let creationResult = await this.articleIndex.create(newArticle)
    
            let newQuillJsObj = await this.articlesModel.updateArticleImages(creationResult.id, creationResult.obj)
    
            await this.articleIndex.updatePartialDocument(creationResult.id, { obj: newQuillJsObj})
    
            await this.articlesModel.updateArticleState({
                    articulo:creationResult.id,
                    categoria:creationResult.category,
                    cliente:creationResult.cliente,
                    pcrc:creationResult.pcrc
                },
                creationResult.state,
                userId
            )
    
            let previousState = ''
    
            let articleEvent = ''
    
            if(news.state == 'published'){
                articleEvent = 'articulo creado'
            } else {
                articleEvent = 'borrador creado'
            }

            if(!!news.obj){
                await this.articleChangesIndex.create({
                    articulo: creationResult.id,
                    articlecontent: news.obj,
                    categoria: newArticle.category,
                    cliente: newArticle.cliente,
                    pcrc: newArticle.pcrc,
                    event: articleEvent,
                    eventDate: (new Date()).getTime(),
                    previoustate: previousState,
                    user: userId,
                    articlestate: news.state
                })
            }
    
            return creationResult
        
    }

    updateNews = async (idArticulo: string, news: Partial<updateNewsDTO>, idUsuario: string): Promise<any> => {

        let articleExtas: Partial<Article>       

        articleExtas = {
            modificationUser: modificationUser,
            modificationDate: (new Date).getTime()
        }        

        let newArticle: Partial<Article> = { ...articleExtas, ...article };
            
        await this.updateArticleState({
            articulo: id,
            categoria: newArticle.category,
            cliente: newArticle.cliente, 
            pcrc: newArticle.pcrc
        },
        newArticle.state,
        modificationUser)
    
        let prevState = await this.ArticleEventsModel.getChangesBy([{filter:'articulo', value:id}], 949784794968, (new Date()).getTime(),0 , 1)

        let previousState = ''

        var articleEvent = ''

        if(prevState.items.length){
            previousState = prevState.items[0].id

            if(article.state){

                var articleEvent = 'articulo actualizado'
                
                if(prevState.items[0].articlestate == 'published' && article.state != 'published'){
                    var articleEvent = 'articulo archivado'
                }

                if(prevState.items[0].articlestate != 'published' && article.state == 'published'){
                    var articleEvent = 'articulo publicado'
                }
            }
        }

        if(!!article.obj){
            await this.articleChangesIndex.create({
                articulo: id,
                articlecontent: article.obj,
                categoria: newArticle.category,
                cliente: newArticle.cliente,
                pcrc: newArticle.pcrc,
                event: articleEvent,
                eventDate: (new Date()).getTime(),
                previoustate: previousState,
                user: modificationUser,
                articlestate: article.state
            })
        }

        let objWithoutImages = await this.updateArticleImages(id, newArticle.obj)

        newArticle.obj = objWithoutImages

        await this.compareDeletedImages( id, objWithoutImages)

        await this.articleIndex.updatePartialDocument(id, newArticle);


        // let newsExtras = {
        //     modificationDate: Date.now(),
        //     modificationUser: idUsuario
        // }

        // return await this.articleIndex.updatePartialDocument(idArticulo, { ...news, ...newsExtras })
    }

    deleteNews = async (idArticulo: string): Promise<any> => {
        try {
            return await this.newsIndex.delete(idArticulo)
        } catch (error) {
            console.log(error)
        }
    }

    getDrafts = async (idSubline: string, from = '0', size = '20', query?: string): Promise<(news & { id: string; })[]> => {
        try {

            let esQuery: any;

            if (typeof query == 'undefined') {
                esQuery = {
                    query: {
                        bool: {
                            filter: [
                                { term: { pcrc: idSubline } },
                                { term: { state: 'archived' } }
                            ]
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size),
                    sort: [
                        { publicationDate: { order: "desc" } }
                    ],
                }

            } else {

                esQuery = {
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        'query': query,
                                        'fields': ['title^3', 'content^2']
                                    }
                                }
                            ],
                            filter: [
                                { term: { pcrc: idSubline } },
                                { term: { state: 'archived' } }
                            ]
                        }
                    },
                    from: parseInt(from),
                    size: parseInt(size),
                    sort: [
                        { publicationDate: { order: "desc" } }
                    ],
                }
            }

            return await this.newsIndex.query(esQuery)

        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

}