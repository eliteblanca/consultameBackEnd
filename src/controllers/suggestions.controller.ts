import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModelService } from '../services/model.service';

@Controller('api/suggestions')
export class SuggestionsController {

    constructor(private modelService:ModelService) {}

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
    getSuggestions(@Query('input') input){
        return this.modelService.getSuggestions(input);
    }
}