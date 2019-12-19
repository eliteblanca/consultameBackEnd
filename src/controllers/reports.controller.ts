import { Controller, UseGuards, Get, Param, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReportsModelService } from "../services/reports-model.service";

@Controller('api/reports')
export class ReportsController {

    constructor(private ReportsModel:ReportsModelService){  }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getArticles(
        @Query('fromdate')    fromdate:string,
        @Query('todate')      todate:string,
        @Query('filterfield') filterfield:string,
        @Query('filtervalue') filtervalue:string,
        @Query('data')        data:string
    ): Promise<any> {
        return this.ReportsModel.getReport(fromdate, todate, filterfield, filtervalue, data);
    }
}