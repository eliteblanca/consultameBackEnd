import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PcrcModelService } from '../services/pcrc-model.service'
import { CategoriesModelService } from "../services/categories-model.service";

@Controller('api/pcrc')
export class PcrcController {

    constructor(
        private pcrcModel:PcrcModelService,
        private categoriesModel:CategoriesModelService,
    ){  }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllPcrc(): Promise<any> {
        return this.pcrcModel.getAllPcrc()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/usuarios')
    async getUsuarios(
        @Param('idPcrc') idPcrc:string
    ): Promise<any> {
        return this.pcrcModel.getPcrcUsers(idPcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/cliente')
    async getClienteOfPcrc(
        @Param('idPcrc') idPcrc:string
    ): Promise<any> {
        return this.pcrcModel.getClienteOfPcrc(idPcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idPcrc/categories')
    async getPcrcCategories(
        @Param('idPcrc') idPcrc:string
    ): Promise<any> {
        return this.categoriesModel.getCategories(idPcrc)
    }

}