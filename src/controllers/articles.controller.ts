import { Controller, UseGuards, Request, Post, Get, Query, Param, Body, Delete, NotAcceptableException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from "../user.decorator";
import { User as U } from "../entities/user";
import { ArticlesModelService, articleDTO, articlesBulkDTO, getArticlesDTO, SingleArticleDTO } from "../services/articles-model.service";
import { SearchModelService } from "../services/search-model.service";
import { timingSafeEqual } from 'crypto';
const enum EndPoints {
    articles = "articles",
    article = "articles/:id",
    likes = "articles/:id/likes",
    disLikes = "articles/:id/disLikes"
  }

@Controller('api/articles')
export class ArticlesController {

  constructor(private articlesModel:ArticlesModelService, private searchModel:SearchModelService ) {}

  /**
  * #### URI: api/articles
  * ***
  * Retorna una lista de articulos segun la linea y sub linea recividas
  * ***
  * - Method: `GET`
  * 
  * - Body: `none`
  *
  * - return: `Article[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Get()
 async getArticles(
   @Query() params:getArticlesDTO
 ):Promise<any>{
   if(params.query){
     
    let {category, ...info} = params;    

    await this.searchModel.newSearch(info)

    return this.articlesModel.getArticlesByQuery(info);

  }else if(params.category){
      return this.articlesModel.getArticlesByCategory(params.category);
  }
 }

 /**
  * #### URI: api/articles/:id
  * ***
  * Retorna un articulo especifico
  * ***
  * - Method: `GET`
  * 
  * - Body: `none`
  *
  * - return: `[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Get(':id')
 singleArticle(@Param() singleArticleDTO:SingleArticleDTO ):any{
    return this.articlesModel.getArticle(singleArticleDTO.id);
 }

  /**
  * #### URI: api/articles/
  * ***
  * Agrega un articulo a la BBDD
  * ***
  * - Method: `POST`
  * 
  * - Body: `Article`
  *
  * - return: `none`
  */
 @UseGuards(AuthGuard('jwt'))
 @Post()
 createArticle(
   @Body() body: articleDTO,
   @User() user: U
  ):any{    
   return this.articlesModel.createArticle(body,user.sub)   
 }

  /**
  * #### URI: api/articles/
  * ***
  * Agrega un articulo a la BBDD
  * ***
  * - Method: `POST`
  * 
  * - Body: `Article`
  *
  * - return: `none`
  */
 @UseGuards(AuthGuard('jwt'))
 @Post('_migrate')
 createArticles(
   @Body() body: articlesBulkDTO,
   @User() user: U
  ):any{
   return this.articlesModel.createArticle(body,user.sub)
 }

  /**
  * #### URI: api/articles/:id/likes
  * ***
  * agrega un nuevo usuario a la lista de likes de un articulo
  * ***
  * - Method: `POST`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Post(':id/likes')
 addLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.addLike(idArticulo,user.sub);
 }

  /**
  * #### URI: api/articles/:id/disLikes
  * ***
  * agrega un nuevo usuario a la lista de dislikes de un articulo
  * ***
  * - Method: `POST`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Post(':id/disLikes')
 addDisLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.addDisLike(idArticulo,user.sub);
 }

  /**
  * #### URI: api/articles/:id/disLikes
  * ***
  * remueve un usuario de la lista de dislikes de un articulo
  * ***
  * - Method: `DELETE`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Delete(':id/disLikes')
 removeDisLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.removeDisLike(idArticulo,user.sub);
 }

  /**
  * #### URI: api/articles/:id/disLikes
  * ***
  * remueve un usuario de la lista de likes de un articulo
  * ***
  * - Method: `DELETE`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Delete(':id/likes')
 removeLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.removeLike(idArticulo,user.sub);
 }

}