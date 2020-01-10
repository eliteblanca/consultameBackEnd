import { Injectable, BadRequestException, HttpException } from '@nestjs/common';
import { NewsIndex, news } from "../indices/newsIndex";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsOptional, MaxLength, IsIn, Length } from 'class-validator';


export class postNewsDTO {

    @IsNotEmpty({ message: "debes proporcionar un titulo a la noticia" })
    title: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    content: string;

    @IsNotEmpty({ message: "debes proporcionar un contenido a la noticia" })
    obj: string;

    @IsNotEmpty({ message: "debes proporcionar un estado a la noticia" })
    state: news['state'];

    @IsNotEmpty({ message: "debes asignar la noticia a una sublinea" })
    subline: string;
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
    ) { }

    getNews = async (sublineId: string, from = '0', size = '20', date = (new Date).getTime().toString(), query?: string): Promise<(news & { id: string; })[]> => {
        try {

            let esQuery: any;

            if (typeof query == 'undefined') {
                esQuery = {
                    query: {
                        bool: {
                            filter: [
                                { term: { subline: sublineId } },
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
                                        'fields': [ 'title^3', 'content^2']
                                    }
                                }
                            ],
                            filter: [
                                { term: { subline: sublineId } },
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

            return await this.newsIndex.query(esQuery)

        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    getSingleNews = async (newsId: string): Promise<(news & { id: string; })> => {        

        let news = await this.newsIndex.getById(newsId)

        if(!!news){
            let result = await this.newsIndex.updateScript(newsId, {
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

    postNews = async (news: postNewsDTO, userId: string): Promise<(news & { id: string; })> => {

        let newsExtras = {
            publicationDate: Date.now(),
            modificationDate: Date.now(),
            modificationUser: userId,
            creator: userId,
            commentsList: '',
            attached: [],
            views: 0
        };

        return await this.newsIndex.create({ ...newsExtras, ...news })

    }

    updateNews = async (idArticulo: string, news: Partial<updateNewsDTO>, idUsuario: string): Promise<any> => {
        let newsExtras = {
            modificationDate: Date.now(),
            modificationUser: idUsuario
        }

        try {
            return await this.newsIndex.updatePartialDocument(idArticulo, { ...news, ...newsExtras })
        } catch (error) {
            console.log(error)
        }

    }

    deleteNews = async (idArticulo: string): Promise<any> => {
        try {
            return await this.newsIndex.delete(idArticulo)
        } catch (error) {
            console.log(error)
        }
    }

    getDrafts = async (idSubline: string, from = '0', size = '20', query?:string): Promise<(news & { id: string; })[]> => {
        try {

            let esQuery: any;

            if (typeof query == 'undefined') {
                esQuery = {
                    query: {
                        bool: {
                            filter: [
                                { term: { subline: idSubline } },
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
                                        'fields': [ 'title^3', 'content^2']
                                    }
                                }
                            ],
                            filter: [
                                { term: { subline: idSubline } },
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