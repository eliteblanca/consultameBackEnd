import { Controller, UseGuards, Post, Get, Query, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NewsModelService, postNewsDTO, updateNewsDTO } from "../services/news-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';

@Controller('api/news')
export class NewsController {

    constructor(private newsModel:NewsModelService){  }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getSingleNews(
        @Param('id') idNews:string
    ): Promise<any> {
        return this.newsModel.getSingleNews(idNews);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async postNews(
        @Body() news: postNewsDTO,
        @User() user: U
    ): Promise<any> {
        return this.newsModel.postNews(news,user.sub)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async updateNews(
        @Body() news: updateNewsDTO,
        @User() user: U,
        @Param('id') idArticulo:string
    ): Promise<any> {
        return this.newsModel.updateNews(idArticulo,news,user.sub)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteNews(
        @Param('id') idArticulo:string
    ): Promise<any> {
        return this.newsModel.deleteNews(idArticulo)
    }

}