import { Controller, UseGuards, Get, Query, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LinesModelService, newLineDTO, newSublineDTO, GetLinesDTO, GetSublinesDTO } from "../services/lines-model.service";
@Controller('api/lines')
export class LinesController {

  constructor(private linesModel: LinesModelService) { }


  @UseGuards(AuthGuard('jwt'))
  @Post()
  createLine(
    @Body() body: newLineDTO
  ): Promise<any> {
    return this.linesModel.createLine(body)
  }  

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getLines(
    @Query() Params: GetLinesDTO
  ): Promise<any> {
    return this.linesModel.getLines(Params.include)
  }  

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/sublines')
  createSubline(
    @Body() body: newSublineDTO,
    @Param('id') idLine: string
  ): any {
    return this.linesModel.createSubline(body, idLine)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':lineId/sublines')
  getSublines(
    @Param() params: GetSublinesDTO
  ): any {
    return this.linesModel.getSublines(params.lineId)
  }

}