import { Controller, UseGuards, Get, Query, Param, Post, Body, Delete } from '@nestjs/common';
import { CategoriesModelService, correctParams, newCategoryDTO, getCategoryParams } from "../services/categories-model.service";
import { AuthGuard } from '@nestjs/passport';
import { LinesModelService } from "../services/lines-model.service";

@Controller('api/sublines')
export class SubLinesController {

    constructor(
        private linesModel: LinesModelService
        ) { }

    @UseGuards(AuthGuard('jwt'))
  @Delete(':idSubline')
  deleteSubLine(
    @Param('id') lineId: string,
    @Param('idSubline') idSubline: string
  ): Promise<any> {
    return this.linesModel.deleteSubLine(idSubline)
  }
}
