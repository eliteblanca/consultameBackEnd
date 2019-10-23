import { Controller, UseGuards, Get, Param, Post, Body, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsModelService, commentDTO } from "../services/comments-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';

@Controller('api')
export class CommentsController {

    constructor(private commentsModel:CommentsModelService){  }

    @UseGuards(AuthGuard('jwt'))
    @Get('articles/:articleId/comments')
    async getComments(
        @Param('articleId') articleId:string,
        @Query('from') from: string,
        @Query('size') size: string
    ): Promise<any> {
        return this.commentsModel.getComments(articleId, from, size)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('comments/:commentId/replies')
    async getRepliesTo(
        @Param('commentId') commentId:string,
        @Query('from') from: string,
        @Query('size') size: string
    ): Promise<any> {
        return this.commentsModel.getRepliesTo(commentId, from, size)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('articles/:articleId/comments')
    async postComment(
        @Body() newComment:commentDTO,
        @Param('articleId') articleId:string,
        @User() User:U
    ): Promise<any> {
        return this.commentsModel.postComment(newComment, articleId, User.sub, User.name)
    }
    
}