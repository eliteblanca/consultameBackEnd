import { Controller, UseGuards, Get, Query, Param, Post, Body, Delete, Put, BadRequestException } from '@nestjs/common';
import { CategoriesModelService, correctParams, newCategoryDTO, getCategoryParams } from "../services/categories-model.service";
import { AuthGuard } from '@nestjs/passport';
import { LinesModelService, newSublineDTO } from "../services/lines-model.service";
import { ArticlesModelService } from "../services/articles-model.service";
import { SearchModelService } from "../services/search-model.service";

@Controller('api/sublines')
export class SubLinesController {

    constructor(
        private linesModel: LinesModelService,
        private categoriesModel: CategoriesModelService,
        private articlesModel: ArticlesModelService,
        private searchModel: SearchModelService
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

    @UseGuards(AuthGuard('jwt'))
    @Get(':idSubline/articles')
    async getArticlesByQuery(
        @Param('idSubline') idSubline: string,
        @Query('query') query: string
    ): Promise<any> {
        if (query) {
            await this.searchModel.newSearch({ query: query, subline: idSubline })
            return this.articlesModel.getArticlesByQuery({ subline: idSubline, query: query })
        } else {
            throw new BadRequestException('falta el parametro query');
        }
    }
}
