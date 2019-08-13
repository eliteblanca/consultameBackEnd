import { Controller, UseGuards, Request, Post, Get, Query, Param, Body, Delete, NotAcceptableException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from "../user.decorator";
import { User as U } from "../entities/user";
import { ArticlesModelService, articleDTO, getArticlesDTO, SingleArticleDTO } from "../services/articles-model.service";
import { isArray } from 'util';

const enum EndPoints {
    articles = "articles",
    article = "articles/:id",
    likes = "articles/:id/likes",
    disLikes = "articles/:id/disLikes"
  }

@Controller('api/articles')
export class ArticlesController {

  constructor(private articlesModel:ArticlesModelService) {}

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
 getArticles(
   @Query() params:getArticlesDTO
 ):any{   

    
  if(params.query){
    return this.articlesModel.getArticlesByQuery({
     query:params.query,
     line:params.line,
     subline:params.subline
    });
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
   if(!isArray(body)){
       body.creator = user.sub;
       return this.articlesModel.createArticle(body)
   }else{
      throw new NotAcceptableException('No se permiten arrays en el cuerpo de la peticion')
   }
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