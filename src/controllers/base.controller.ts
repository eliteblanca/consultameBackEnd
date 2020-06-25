import { BadRequestException, Controller, Get, Param, Query, UseGuards, Post, Body, HttpCode } from '@nestjs/common';
import { User as U } from '../entities';
import { JwtGuard } from "../guards/jwt.guard";
import { CategoriesModelService } from "../services/categories-model.service";
import { BaseModelService, postBaseDTO, postSubBaseDTO } from '../services/base-model.service';
import { User } from '../user.decorator';
import { ArticlesModelService } from "../services/articles-model.service";
import { NewsModelService } from "../services/news-model.service";
import { SearchModelService } from "../services/search-model.service";


@Controller('api/pcrc')
export class PcrcController {

    constructor(
        private baseModel: BaseModelService,
        private categoriesModel: CategoriesModelService,
        private searchModel: SearchModelService,
        private articlesModel: ArticlesModelService,
        private newsModel: NewsModelService,
    ) { }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Post('')
    async createBase(
        @Body() baseDTO:postBaseDTO,
        @User() user:U
    ){
        let result = await this.baseModel.createBase(baseDTO.nombre, baseDTO.subaseNombre, user.sub)

        return {
            status:'created'
        }
    }

    @UseGuards(JwtGuard)
    @Get()
    async getAllBases(
        @User() user:U
    ): Promise<any> {
        return this.baseModel.getUserBases(user.sub)
    }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Post(':id/sub')
    async createSubBase(
        @Body() baseDTO:postSubBaseDTO,
        @User() user:U
    ){
        let result = await this.baseModel.createSubBase(baseDTO.nombre, baseDTO.parentId, user.sub )

        return {
            status:'created'
        }
    }

    @UseGuards(JwtGuard)
    @Get(':id_base/usuarios')
    async getUsuarios(
        @Param('id_base') idBase: string
    ): Promise<any> {
        return this.baseModel.getBaseUsers(idBase)
    }

    @UseGuards(JwtGuard)
    @Get(':idPcrc/categories')
    async getPcrcCategories(
        @Param('idPcrc') idPcrc: string
    ): Promise<any> {
        return this.categoriesModel.getCategories(idPcrc)
    }

    // @UseGuards(JwtGuard)
    // @Get(':idPcrc/articles')
    // async getArticlesByQuery(
    //     @Param('idPcrc') idPcrc: string,
    //     @Query('query') query: string,
    //     @Query('orderby') orderby: string,
    //     @Query('tag') tag: string,
    //     @Query('from') from: string,
    //     @Query('size') size: string,
    //     @Query('state') state: string,
    //     @User() user: U
    // ): Promise<any> {
    //     if (query) {

    //         if(from == '0'){
    //             await this.searchModel.newSearch(query, idPcrc, user.sub)
    //         }

    //         let didYouMean = await this.searchModel.getDidYouMean(query);

    //         let result = await this.articlesModel.getArticlesByQuery(didYouMean, { pcrc:idPcrc }, state, from, size)

    //         if(!result){
    //             result = await this.articlesModel.getArticlesByQuery(query, { pcrc:idPcrc }, state, from, size)
    //         }

    //         return result

    //     }

    //     if (tag) {
    //         return this.articlesModel.getArticlesByTag({ subline: idPcrc, tag: tag, from: from, size: size })
    //     } 

    //     if(orderby == 'views'){
    //         return this.articlesModel.getArticlesByView(idPcrc, from, size)
    //     }

    //     if(orderby == 'update'){
    //         return this.articlesModel.getArticlesByUpdate(idPcrc, from, size)
    //     }

    //     throw new BadRequestException('falta el parametro query o tag');

    // }

    // @UseGuards(JwtGuard)
    // @Get(':idPcrc/news')
    // async getNews(
    //     @Param('idPcrc') idPcrc: string,        
    //     @Query('query') query: string,
    //     @Query('state') state: string,
    //     @Query('from') from: string,
    //     @Query('size') size: string,
    //     @Query('date') date: string
    // ): Promise<any> {

    //     if (state == 'archived') {
    //         return this.newsModel.getDrafts(idPcrc, from, size, query)
    //     } else {
    //         return this.newsModel.getNews(idPcrc, from, size, date, query)
    //     }
    // }

    // @UseGuards(JwtGuard)
    // @Get(':idPcrc/suggestions')
    // async getSuggestions(
    //     @Query('input') input: string,
    //     @Param('idPcrc') idPcrc: string) {

    //     if (idPcrc && input) {
    //         return this.searchModel.getSuggestions(input, idPcrc);
    //     } else if (idPcrc) {
    //         return this.searchModel.getBySubline(idPcrc);
    //     } else {
    //         return this.searchModel.getAll();
    //     }
    // }

    // @UseGuards(JwtGuard)
    // @Get(':idPcrc/didYouMean')
    // async getDidYouMean(
    //     @Query('input') input: string,
    //     @Param('idPcrc') idPcrc: string) {
    //         return this.searchModel.getDidYouMean(input);
    // }

}