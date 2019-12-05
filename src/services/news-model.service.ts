import { Injectable, BadRequestException } from '@nestjs/common';
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
    state: string;

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
    state: string;
}

@Injectable()
export class NewsModelService {

    constructor(
        private newsIndex: NewsIndex,
    ) { }

    getNews = async (sublineId: string, from: string, size: string, date: string): Promise<(news & { id: string; })[]> => {
        try {
            let query: any;

            if (!!from && !!size) {
                if (!!!date) {
                    date = (new Date).getTime().toString()
                }

                query = {
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
                query = {
                    query: {
                        bool: {
                            filter: [
                                { term: { subline: sublineId } },
                                { term: { state: 'published' } }
                            ]
                        }
                    },
                    sort: [
                        { publicationDate: { order: "desc" } }
                    ],
                }
            }

            return await this.newsIndex.query(query)
        } catch (error) {
            console.log(error.meta.body.error)
        }
    }

    getSingleNews = async (newsId: string): Promise<(news & { id: string; })> => {
        try {

            let result = await this.newsIndex.updateScript(newsId,{
                'source' : 'ctx._source.views += 1',
                'lang': 'painless'
            });

            return await this.newsIndex.getById(newsId)

        } catch (error) {
            console.log(error)
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
            views:0
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

    getDrafts = async (idSubline: string, from: string, size: string): Promise<(news & { id: string; })[]> => {
        try {
            return await this.newsIndex.where({ subline: idSubline, state: 'archived' }, from, size, { orderby:'modificationDate', order:'desc' })
        } catch (error) {
            console.log(error)
            console.log(error.meta.body.error)
        }
    }

}