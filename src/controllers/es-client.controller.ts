import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from "../guards/jwt.guard";
import { EsClientService } from "../services/es-client.service";

@Controller('es-client')
export class EsClientController {

    constructor(private esClientService: EsClientService) { }

    // @UseGuards(JwtGuard)
    @Post('index')
    createIndex(
        @Body() body: { index: string }
    ): any {
        return this.esClientService.createIndex(body.index);
    }

    @UseGuards(JwtGuard)
    @Delete('index/:id')
    deleteIndex(
        @Param('id') indice
    ): any {
        return this.esClientService.deleteIndex(indice);
    }

    @UseGuards(JwtGuard)
    @Put('index/:id/fields')
    addFieldToIndex(
        @Body() fieldData:{type:'text' | 'keyword' | 'integer', name:'string'},
        @Param('id') indice
    ): any {
        return this.esClientService.addFieldToIndex(indice, fieldData.name, fieldData.type);
    }

    @UseGuards(JwtGuard)
    @Post('status')
    checkStatus(): any {
        return this.esClientService.DDBB_status();
    }

}