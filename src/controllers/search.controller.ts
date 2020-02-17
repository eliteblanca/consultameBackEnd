import { Controller, UseGuards, Get, Query, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SearchModelService, newSearchDTO } from "../services/search-model.service";
import { User as U } from '../entities/user';
import { User } from '../user.decorator';

@Controller('api')
export class searchController {

    constructor(private searchModel:SearchModelService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('suggestions')
    getSuggestions(
        @Query('input') input:string,
        @Query('subline') subline:string){

        if(subline && input){
            return this.searchModel.getSuggestions(input, subline);
        }else if (subline) {
            return this.searchModel.getBySubline(subline);
        }else{
            return this.searchModel.getAll();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('search')
    newSearch(
        @Body() body:newSearchDTO,        
        @User() user: U
    ){
        this.searchModel.newSearch(body.query, body.subline, user.sub)
    }
}