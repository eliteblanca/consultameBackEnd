import { Controller, UseGuards, Get, Query, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModelService } from "../services/model.service";

@Controller('api/lines')
export class LinesController {


    constructor(private modelService:ModelService) {}

    /**
    * #### URI: :idLine/sublines/:idSubLine/categories
    * ***
    * Retorna una lista de las categorias de una sublinea
    * ***
    * - Method: `GET`
    * 
    * - Body: `none`
    *
    * - return: `string[]`
    */
   @UseGuards(AuthGuard('jwt'))
   @Get(':idLine/sublines/:idSubLine/categories')
   getUserLines(
     @Param('idLine') id_line,
     @Param('idSubLine') id_subLine
   ):any{
     console.log('id_usuario')
     return this.modelService.categories(id_line, id_subLine);
   }

}