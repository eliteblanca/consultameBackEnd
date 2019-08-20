import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SearchModelService } from "../services/search-model.service";

@Controller('api/suggestions')
export class searchController {

    constructor(private searchModel:SearchModelService) {}

    /**
    * #### URI: api/suggestions
    * ***
    * Retorna una lista de sugerencias acerca de la busqueda actual
    * ***
    * - Method: `GET`
    * 
    * - Body: `none`
    *
    * - return: `Article[]`
    */
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getSuggestions(
        @Query('input') input:string,
        @Query('subline') subline:string){

        return this.searchModel.getSuggestions(input, subline);
    }
}