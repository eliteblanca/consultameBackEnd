import { Controller, UseGuards, Request, Post, Get, Query, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModelService } from "../services/model.service";

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
  * Retorna un articulo en es
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

}