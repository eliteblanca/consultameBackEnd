import { Injectable, ConflictException } from '@nestjs/common';
import { CommentsIndexService, comment } from "../indices/commentsIndex.service";
import { Article, ArticleIndex } from "../indices/articleIndex";
import { IsOptional, Length } from 'class-validator';

export class commentDTO {
    
    @Length(20, 20, { message: 'debes proporcionar un id valido' })
    @IsOptional()
    replyTo:string

    @Length(2, 2000)
    text:string
}

@Injectable()
export class CommentsModelService {

    constructor(
        private commentsIndex: CommentsIndexService,
        private articleIndex: ArticleIndex
    ) { }

    getComments = async (articleId: string, from:string = '0' , size:string = '10' ): Promise<comment[]> => {

        try {
            let query = {
                query: {
                    bool: {
                        filter: [
                            { term: { article: articleId } }
                        ],
                        must_not : {
                            exists: {
                                field: "replyTo"
                            }
                        }
                    }
                },
                from : parseInt(from),
                size : parseInt(size),
                sort : [
                    { publicationDate: { order : 'desc' }}
                ]
            };

            let result = await this.commentsIndex.query(query);

            return result

        } catch (err) {
            console.log(err.meta.body.error);
        }

    }

    postComment = async (newComment:commentDTO, articleId:string, userId:string, username:string): Promise<comment & { id: string; }> => {
        if( newComment.replyTo ){

            let replyComment:comment;
            let article:Article;

            try{
                article = await this.articleIndex.getById(articleId) 
            } catch (error){
                throw new ConflictException('el articulo no existe');
            }

            try {
                replyComment = await this.commentsIndex.getById(newComment.replyTo)
            } catch (error) {
                if(error.meta && error.meta.body && !error.meta.body.found){
                    throw new ConflictException('el comentario a responder no existe');
                }
            }

            if(replyComment.replyTo){
                throw new ConflictException('no puedes responder a una respuesta de un commentario');
            }

            if( replyComment.article != articleId ){
                throw new ConflictException('el comentario a responder no pertenece al articulo');
            }
        }

        let commnetExtras = {
            publicationDate: Date.now(),
            user: userId,
            username:username,
            article: articleId
        }

        return await this.commentsIndex.create({ ...newComment, ...commnetExtras })
    }

    getRepliesTo = async (replyTo: string, from:string = '0' , size:string = '10' ): Promise<comment[]> => {
        return this.commentsIndex.where({ replyTo: replyTo }, from, size, { orderby:'publicationDate',order:'desc' })
    }

}