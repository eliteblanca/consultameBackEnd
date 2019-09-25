import { Controller, UseGuards, Post, Get, Query, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
import { ArticlesModelService, articleDTO, articlesBulkDTO, SingleArticleDTO } from '../services/articles-model.service';
import { SearchModelService } from '../services/search-model.service';

@Controller('api/articles')
export class ArticlesController {

    constructor(private articlesModel: ArticlesModelService, private searchModel: SearchModelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getArticles(): Promise<any> {
        return this.articlesModel.getAllArticles();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    singleArticle(@Param() singleArticleDTO: SingleArticleDTO): any {
        return this.articlesModel.getArticle(singleArticleDTO.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteArticle(@Param() singleArticleDTO: SingleArticleDTO): any {
        return this.articlesModel.deleteArticle(singleArticleDTO.id);
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
    @Post('_migrate')
    createArticles(
        @Body() body: articlesBulkDTO,
        @User() user: U,
    ): any {
        return this.articlesModel.createArticle(body, user.sub);
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
}
