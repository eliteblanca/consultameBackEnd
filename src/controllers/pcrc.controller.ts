import { Controller, UseGuards, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PcrcModelService } from '../services/pcrc-model.service'
import { CategoriesModelService } from "../services/categories-model.service";
import { SearchModelService } from "./../services/search-model.service";
import { ArticlesModelService } from "./../services/articles-model.service";
import { NewsModelService } from "./../services/news-model.service";


@Controller('api/pcrc')
export class PcrcController {

    constructor(
        private pcrcModel: PcrcModelService,
        private categoriesModel: CategoriesModelService,
        private searchModel: SearchModelService,
        private articlesModel: ArticlesModelService,
        private newsModel: NewsModelService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllPcrc(): Promise<any> {
        return this.pcrcModel.getAllPcrc()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/usuarios')
    async getUsuarios(
        @Param('idPcrc') idPcrc: string
    ): Promise<any> {
        return this.pcrcModel.getPcrcUsers(idPcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/cliente')
    async getClienteOfPcrc(
        @Param('idPcrc') idPcrc: string
    ): Promise<any> {
        return this.pcrcModel.getClienteOfPcrc(idPcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/categories')
    async getPcrcCategories(
        @Param('idPcrc') idPcrc: string
    ): Promise<any> {
        return this.categoriesModel.getCategories(idPcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/articles')
    async getArticlesByQuery(
        @Param('idPcrc') idPcrc: string,
        @Query('query') query: string,
        @Query('from') from: string,
        @Query('size') size: string,
        @Query('state') state: string,
        @Query('tag') tag: string
    ): Promise<any> {
        if (query) {
            await this.searchModel.newSearch({ query: query, subline: idPcrc })
            return this.articlesModel.getArticlesByQuery(query, idPcrc, state, from, size)
        } else if (tag) {
            return this.articlesModel.getArticlesByTag({ subline: idPcrc, tag: tag, from: from, size: size })
        } else {
            throw new BadRequestException('falta el parametro query o tag');
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/news')
    async getNews(
        @Param('idPcrc') idPcrc: string,
        @Query('state') state: string,
        @Query('from') from: string,
        @Query('size') size: string,
        @Query('date') date: string
    ): Promise<any> {
        if (state == 'archived') {
            console.log('GetDraft')
            return this.newsModel.getDrafts(idPcrc, from, size)
        } else {
            return this.newsModel.getNews(idPcrc, from, size, date)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/suggestions')
    async getSuggestions(
        @Query('input') input: string,
        @Param('idPcrc') idPcrc: string) {

        if (idPcrc && input) {
            return this.searchModel.getSuggestions(input, idPcrc);
        } else if (idPcrc) {
            return this.searchModel.getBySubline(idPcrc);
        } else {
            return this.searchModel.getAll();
        }
    }

}