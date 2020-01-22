import { Controller, UseGuards, Get, Param, Query, HttpException, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CargosModelService } from "../services/cargos-model.service";
import { ArticleEventsModelService } from "../services/articleEvents-model.service";
import { isEvent } from "../indices/articlesEventsIndex";

@Controller('api/reports')
export class ReportsController {

    constructor(
        private articleEventsModel:ArticleEventsModelService,
        private cargosModel:CargosModelService
    ){  }

    @UseGuards(AuthGuard('jwt'))
    @Post('events')
    async getArticles(
        @Query('fromdate')    fromdate:string,
        @Query('todate')      todate:string,
        @Query('event')       event:string,
        @Body() filters: { filters:{ filter:string, value:string }[] }
    ): Promise<any> {
        if(isEvent(event)){
            return this.articleEventsModel.getEventCountBy(event, filters.filters, fromdate, todate)
        } else {
            throw new HttpException({
                "message": "evento no soportado"
            }, 400)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('count')
    async getArticlesCount(
        @Query('date') date:string,
        @Query('item') item:string,
        @Body() filters: { filters:{ filter:string, value:string }[] }
    ): Promise<any> {
        if(item == 'articles'){
            return this.articleEventsModel.getArticlesCountBy(date, 'published', filters.filters)
        } else {
            return this.articleEventsModel.getFavoritesCountBy(date, filters.filters, item)
        }
    }
}