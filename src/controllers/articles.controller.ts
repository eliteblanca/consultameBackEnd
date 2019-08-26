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

 @UseGuards(AuthGuard('jwt'))
 @Get(':id')
 singleArticle(@Param() singleArticleDTO:SingleArticleDTO ):any{
    return this.articlesModel.getArticle(singleArticleDTO.id);
 }

 @UseGuards(AuthGuard('jwt'))
 @Post()
 createArticle(
   @Body() body: articleDTO,
   @User() user: U
  ):any{    
   return this.articlesModel.createArticle(body,user.sub)   
 }

 @UseGuards(AuthGuard('jwt'))
 @Post('_migrate')
 createArticles(
   @Body() body: articlesBulkDTO,
   @User() user: U
  ):any{
   return this.articlesModel.createArticle(body,user.sub)
 }

 @UseGuards(AuthGuard('jwt'))
 @Post(':id/likes')
 addLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.addLike(idArticulo,user.sub);
 }

 @UseGuards(AuthGuard('jwt'))
 @Post(':id/disLikes')
 addDisLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.addDisLike(idArticulo,user.sub);
 }

 @UseGuards(AuthGuard('jwt'))
 @Delete(':id/disLikes')
 removeDisLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.removeDisLike(idArticulo,user.sub);
 }

 @UseGuards(AuthGuard('jwt'))
 @Delete(':id/likes')
 removeLike(@Param('id') idArticulo , @User() user:U):any{
    return this.articlesModel.removeLike(idArticulo,user.sub);
 }

}