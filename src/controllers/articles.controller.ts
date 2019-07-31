import { Controller, UseGuards, Request, Post, Get, Query, Param, Body, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModelService } from "../services/model.service";
import { User } from "../user.decorator";
import { User as U } from "../entities/user";
import { Article } from "../entities/article";

const enum EndPoints {
    articles = "articles",
    article = "articles/:id",
    likes = "articles/:id/likes",
    disLikes = "articles/:id/disLikes"
  }

  /**
  * #### URI base: api/articles
  * ***
  * Maneja todas las peticiones a la api/articles
  * ***
  * #### Members:
  * ***
  * `allArticles`: Retorna una lista de articulos segun la linea y sub linea recividas
  * ***
  * 
  */
@Controller('api/articles')
export class ArticlesController {

  constructor(private modelService:ModelService) {}

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
   @Query('query') query, 
   @Query('category') category,
   @Query('line') line, 
   @Query('subLine') subLine
 ):any{
   
   return this.modelService.getArticles({
    query:query,
    category:category,
    line:line,
    subLine:subLine
   });
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
 singleArticle(@Param('id') idArticulo ):any{
    return this.modelService.getArticle(idArticulo);
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
 createArticles(
   @Body() body: Article[] ,
   @User() user:U
  ):any{
    body.map(x=>{
      x.creator = user.sub;
      return x
    })

    this.modelService.createArticles(body)
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
    return this.modelService.addLike(idArticulo,user.sub);
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
    return this.modelService.addDisLike(idArticulo,user.sub);
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
    return this.modelService.removeDisLike(idArticulo,user.sub);
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
    return this.modelService.removeLike(idArticulo,user.sub);
 }

}  