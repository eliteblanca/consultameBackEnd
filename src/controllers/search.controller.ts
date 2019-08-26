import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SearchModelService } from "../services/search-model.service";

@Controller('api/suggestions')
export class searchController {

    constructor(private searchModel:SearchModelService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
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
}
            
