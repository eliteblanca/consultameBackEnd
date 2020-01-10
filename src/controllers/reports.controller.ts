import { Controller, UseGuards, Get, Param, Query, HttpException } from '@nestjs/common';
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
    @Get('events')
    async getArticles(
        @Query('fromdate')    fromdate:string,
        @Query('todate')      todate:string,
        @Query('filterfield') filterfield:string,
        @Query('filtervalue') filtervalue:string,
        @Query('event')       event:string
    ): Promise<any> {
        if(isEvent(event)){
            return this.articleEventsModel.getEventCountBy(event, filterfield, filtervalue, fromdate, todate)
        } else {
            throw new HttpException({
                "message": "evento no soportado"
            }, 400)
        }        
    }
}