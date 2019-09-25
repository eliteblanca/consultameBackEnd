import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticlesModelService } from '../services/articles-model.service';
import { CategoriesModelService, newCategoryDTO, udpateCategoryDTO } from '../services/categories-model.service';

@Controller('api/categories')
export class CategoriesController {

    constructor(
        private categoriesModel: CategoriesModelService,
        private articlesModel: ArticlesModelService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createCategory(
        @Body() Body: newCategoryDTO
    ): Promise<any> {
        return this.categoriesModel.createCategory(Body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteCategory(
        @Param('id') id: string
    ): Promise<any> {
        try {
            return this.categoriesModel.deleteCategory(id);
        } catch (error) {
            console.log(error)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateCategory(
        @Param('id') id: string,
        @Body() Body: udpateCategoryDTO
    ): Promise<any> {
        return this.categoriesModel.updateCategory(id, Body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id/articles')
    getArticlesOfCategory(
        @Param('id') idCategory: string
    ): Promise<any> {
        return this.articlesModel.getArticlesByCategory(idCategory);
    }

}
