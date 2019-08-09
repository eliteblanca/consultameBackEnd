import { Controller, UseGuards, Get, Query, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LinesModelService, lineDTO, sublineDTO } from "../services/lines-model.service";
@Controller('api/lines')
export class LinesController {

  constructor(private linesModel: LinesModelService) { }

  /**
  * #### URI: api/lines/
  * ***
  * Agrega una nueva linea a la BBDD
  * ***
  * - Method: `POST`
  * 
  * - Body: `{name:string}`
  *
  * - return: `none`
  */
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createLine(
    @Body() body: lineDTO
  ): any {
    return this.linesModel.createLine(body)
  }

  /**
  * #### URI: api/lines/:id/sublines
  * ***
  * Agrega una nueva sublinea a la BBDD asociada a la linea pasada como parametro
  * ***
  * - Method: `POST`
  * 
  * - Body: `{name:string}`
  *
  * - return: `none`
  */
  @UseGuards(AuthGuard('jwt'))
  @Post(':id/sublines')
  createSubline(
    @Body() body: sublineDTO,
    @Param('id') idLine: string
  ): any {
    return this.linesModel.createSubline(body, idLine)
  }
}