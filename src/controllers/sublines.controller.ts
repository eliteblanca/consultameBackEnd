import { Controller, UseGuards, Get, Query, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CategoriesModelService, correctParams, newCategoryDTO, getCategoryParams } from "../services/categories-model.service";
import { AuthGuard } from '@nestjs/passport';
import { LinesModelService, newSublineDTO } from "../services/lines-model.service";

@Controller('api/sublines')
export class SubLinesController {

  constructor(
    private linesModel: LinesModelService,
    private categoriesModel: CategoriesModelService
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':idSubline')
  deleteSubLine(
    @Param('idSubline') idSubline: string
  ): Promise<any> {
    return this.linesModel.deleteSubLine(idSubline)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':idSubline/categories')
  getCategories(
    @Param('idSubline') idSubline: string
  ): Promise<any> {
    return this.categoriesModel.getCategories(idSubline);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':idSubline')
  updateSubLine(
    @Param('idSubline') iSubline: string,    
    @Body() body: newSublineDTO
  ): Promise<any> {
    return this.linesModel.updateSubline(iSubline, body)
  }
}
