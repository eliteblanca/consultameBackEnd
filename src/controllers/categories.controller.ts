import { Controller, UseGuards, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CategoriesModelService, correctParams, newCategoryDTO, getCategoryParams } from "../services/categories-model.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('api/sublines/:sublineId/categories')
export class CategoriesController {

    constructor(private categoriesModel: CategoriesModelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createCategory(
        @Param() Params: correctParams,
        @Body() Body: newCategoryDTO
    ): Promise<any> {
        return this.categoriesModel.createCategory(Body,Params.sublineId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getCategories(
        @Param() Params: correctParams
    ): Promise<any> {
        return this.categoriesModel.getCategories(Params.sublineId);
    }  
}
