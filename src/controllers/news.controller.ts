import { Controller, UseGuards, Post, Get, Query, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NewsModelService, postNewsDTO } from "../services/news-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';

@Controller('api/news')
export class NewsController {

    constructor(private newsModel:NewsModelService){  }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getSingleNews(): Promise<any> {
        // return this.articlesModel.getAllArticles();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async postNews(        
        @Body() news: postNewsDTO,        
        @User() user: U
    ): Promise<any> {
        return this.newsModel.postNews(news,user.sub)
    }

        

}