import { Controller, UseGuards, Post, Query, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EsClientService } from "../services/es-client.service";

@Controller('es-client')
export class EsClientController {

    constructor(private esClientService: EsClientService) { }

    // @UseGuards(AuthGuard('jwt'))
    @Post('index')
    createIndex(
        @Body() body: { index: string }
    ): any {
        return this.esClientService.createIndex(body.index);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('index/:id')
    deleteIndex(
        @Param('id') indice
    ): any {
        return this.esClientService.deleteIndex(indice);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('index/:id/fields')
    addFieldToIndex(
        @Body() fieldData:{type:'text' | 'keyword' | 'integer', name:'string'},
        @Param('id') indice
    ): any {
        return this.esClientService.addFieldToIndex(indice, fieldData.name, fieldData.type);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('status')
    checkStatus(): any {
        return this.esClientService.DDBB_status();
    }

}