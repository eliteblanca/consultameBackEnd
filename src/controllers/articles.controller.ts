import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { User as U } from '../entities';
import { JwtGuard } from "../guards/jwt.guard";
import { articleDTO, ArticlesModelService, articleViewsDTO, SingleArticleDTO } from '../services/articles-model.service';
import { SearchModelService } from '../services/search-model.service';
import { User } from '../user.decorator';

@Controller('api/articles')
export class ArticlesController {

    // constructor(private articlesModel: ArticlesModelService, private searchModel: SearchModelService) { }

    // @UseGuards(JwtGuard)
    // @Get()
    // async getArticles(): Promise<any> {
    //     return this.articlesModel.getAllArticles();
    // }

    // @Get('prueba')
    // async getPrueba(
    //     @Query('from') from,
    //     @Query('to') to,
    //     @Query('idarticulo') idarticulo
    // ): Promise<any> {
    //     try {
    //         return this.articlesModel.prueba(from, to, idarticulo);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // @UseGuards(JwtGuard)
    // @Get(':id')
    // singleArticle(
    //     @Param() singleArticleDTO: SingleArticleDTO,
    //     @User() user: U
    // ): any {
    //     return this.articlesModel.getArticle(singleArticleDTO.id, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':id')
    // deleteArticle(
    //     @Param() singleArticleDTO: SingleArticleDTO,        
    //     @User() user: U,
    // ): any {
    //     return this.articlesModel.deleteArticle(singleArticleDTO.id, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Post()
    // createArticle(
    //     @Body() body: articleDTO,
    //     @User() user: U,
    // ): any {
    //     return this.articlesModel.createArticle(body, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Put(':id')
    // updateArticle(
    //     @Body() body,
    //     @User() user: U,
    //     @Param('id') id: string,
    // ): any {
    //     return this.articlesModel.updateArticle(id, body, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Post(':id/likes')
    // addLike(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.addLike(idArticulo, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Post(':id/disLikes')
    // addDisLike(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.addDisLike(idArticulo, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':id/disLikes')
    // removeDisLike(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.removeDisLike(idArticulo, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':id/likes')
    // removeLike(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.removeLike(idArticulo, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Post(':id/favorites')
    // addFavorite(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.addFavorite(idArticulo, user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':id/favorites')
    // removeFavorite(@Param('id') idArticulo, @User() user: U): any {
    //     return this.articlesModel.removeFavorite(idArticulo, user.sub);
    // }
    
    // @UseGuards(JwtGuard)
    // @Get(':id/history')
    // articleHistory(
    //     @Param('id') idArticulo:string
    // ): any {
    //     return this.articlesModel.getArticleHistory(idArticulo)
    // }   

    // @UseGuards(JwtGuard)
    // @Post(':id/views')
    // addViews(
    //     @Param('id') idArticulo,
    //     @User() user: U,
    //     @Body() body: articleViewsDTO
    // ): any {
    //     return this.articlesModel.addArticleView(idArticulo, body.initialDate, body.finalDate, user.sub)
    // }
}