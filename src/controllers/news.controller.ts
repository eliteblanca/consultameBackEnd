import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User as U } from '../entities';
import { JwtGuard } from "../guards/jwt.guard";
import { NewsModelService, postNewsDTO, updateNewsDTO } from "../services/news-model.service";
import { User } from '../user.decorator';

@Controller('api/news')
export class NewsController {

    // constructor(private newsModel:NewsModelService){  }

    // @UseGuards(JwtGuard)
    // @Get(':id')
    // async getSingleNews(
    //     @Param('id') idNews:string
    // ): Promise<any> {
    //     return this.newsModel.getSingleNews(idNews);
    // }

    // @UseGuards(JwtGuard)
    // @Post()
    // async postNews(
    //     @Body() news: postNewsDTO,
    //     @User() user: U
    // ): Promise<any> {
    //     return this.newsModel.postNews(news,user.sub)
    // }

    // @UseGuards(JwtGuard)
    // @Put(':id')
    // async updateNews(
    //     @Body() news: updateNewsDTO,
    //     @User() user: U,
    //     @Param('id') idArticulo:string
    // ): Promise<any> {
    //     return this.newsModel.updateNews(idArticulo,news,user.sub)
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':id')
    // async deleteNews(
    //     @Param('id') idArticulo:string
    // ): Promise<any> {
    //     return this.newsModel.deleteNews(idArticulo)
    // }

}