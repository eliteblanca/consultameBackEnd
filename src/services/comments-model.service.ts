import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { CommentsIndexService, comment } from "../indices/commentsIndex.service";
import { Article, ArticleIndex } from "../indices/articleIndex";
import { IsOptional, Length } from 'class-validator';
import { ArticleEventsModelService } from "../services/articleEvents-model.service";
import { CargosModelService } from "../services/cargos-model.service";
export class commentDTO {

    @Length(20, 20, { message: 'debes proporcionar un id valido' })
    @IsOptional()
    replyTo: string

    @Length(2, 2000)
    text: string
}

@Injectable()
export class CommentsModelService {

    // constructor(
    //     private commentsIndex: CommentsIndexService,
    //     private articleIndex: ArticleIndex,
    //     private articleEventsModel: ArticleEventsModelService,
    //     private cargosModel: CargosModelService,
    // ) { }

    // getComments = async (articleId: string, from: string = '0', size: string = '10'): Promise<comment[]> => {


    //     let query = {
    //         query: {
    //             bool: {
    //                 filter: [
    //                     { term: { articulo: articleId } }
    //                 ],
    //                 must_not: {
    //                     exists: {
    //                         field: "replyTo"
    //                     }
    //                 }
    //             }
    //         },
    //         from: parseInt(from),
    //         size: parseInt(size),
    //         sort: [
    //             { publicationDate: { order: 'desc' } }
    //         ]
    //     };

    //     let result = await this.commentsIndex.query(query);

    //     return result


    // }

    // postComment = async (newComment: commentDTO, articleId: string, userId: string, username: string): Promise<comment & { id: string; }> => {

    //     var article: Article;

    //     article = await this.articleIndex.getById(articleId)

    //     if (!!!article) {
    //         throw new HttpException({
    //             "message": `articulo no encontrado`
    //         }, 404)

    //     }

    //     if (newComment.replyTo) {

    //         let replyComment: comment;

    //         replyComment = await this.commentsIndex.getById(newComment.replyTo)

    //         if (!!!replyComment) {
    //             throw new HttpException({
    //                 "message": `el comentario a responder no existe`
    //             }, 404)
    //         }

    //         if (replyComment.replyTo) {
    //             throw new ConflictException('no puedes responder a una respuesta de un commentario');
    //         }

    //         if (replyComment.articulo != articleId) {
    //             throw new ConflictException('el comentario a responder no pertenece al articulo');
    //         }
    //     }

    //     let bossInfo = await this.cargosModel.getAllBoss(userId)



    //     let commnetExtras: Omit<comment, 'replyTo' | 'text'> = {
    //         publicationDate: Date.now(),
    //         user: userId,
    //         username: username,
    //         articulo: articleId,
    //         lider: bossInfo.lider,
    //         coordinador: bossInfo.coordinador,
    //         gerente: bossInfo.gerente,
    //         director: bossInfo.director,
    //         categoria: article.category,
    //         cliente: article.cliente,
    //         pcrc: article.pcrc
    //     }

    //     await this.articleEventsModel.createEvent(articleId, userId, 'comment')

    //     return await this.commentsIndex.create({ ...newComment, ...commnetExtras })
    // }

    // getRepliesTo = async (replyTo: string, from: string = '0', size: string = '10'): Promise<comment[]> => {
    //     return this.commentsIndex.where({ replyTo: replyTo }, from, size, { orderby: 'publicationDate', order: 'desc' })
    // }

}