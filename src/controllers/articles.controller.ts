import { Controller, UseGuards, Post, Get, Query, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
import { ArticlesModelService, articleDTO, SingleArticleDTO, articleViewsDTO } from '../services/articles-model.service';
import { SearchModelService } from '../services/search-model.service';
import { query } from 'express';

@Controller('api/articles')
export class ArticlesController {

    constructor(private articlesModel: ArticlesModelService, private searchModel: SearchModelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getArticles(): Promise<any> {
        return this.articlesModel.getAllArticles();
    }

    @Get('prueba')
    async getPrueba(
        @Query('from') from,
        @Query('to') to,
        @Query('idarticulo') idarticulo
    ): Promise<any> {
        try {
            return this.articlesModel.prueba(from, to, idarticulo);
        } catch (error) {
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    singleArticle(
        @Param() singleArticleDTO: SingleArticleDTO,
        @User() user: U
    ): any {
        return this.articlesModel.getArticle(singleArticleDTO.id, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteArticle(
        @Param() singleArticleDTO: SingleArticleDTO,        
        @User() user: U,
    ): any {
        return this.articlesModel.deleteArticle(singleArticleDTO.id, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createArticle(
        @Body() body: articleDTO,
        @User() user: U,
    ): any {
        return this.articlesModel.createArticle(body, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateArticle(
        @Body() body,
        @User() user: U,
        @Param('id') id: string,
    ): any {
        return this.articlesModel.updateArticle(id, body, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/likes')
    addLike(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.addLike(idArticulo, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/disLikes')
    addDisLike(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.addDisLike(idArticulo, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id/disLikes')
    removeDisLike(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.removeDisLike(idArticulo, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id/likes')
    removeLike(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.removeLike(idArticulo, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/favorites')
    addFavorite(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.addFavorite(idArticulo, user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id/favorites')
    removeFavorite(@Param('id') idArticulo, @User() user: U): any {
        return this.articlesModel.removeFavorite(idArticulo, user.sub);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get(':id/history')
    articleHistory(
        @Param('id') idArticulo:string
    ): any {
        return this.articlesModel.getArticleHistory(idArticulo)
    }   

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/views')
    addViews(
        @Param('id') idArticulo,
        @User() user: U,
        @Body() body: articleViewsDTO
    ): any {
        return this.articlesModel.addArticleView(idArticulo, body.initialDate, body.finalDate, user.sub)
    }
}