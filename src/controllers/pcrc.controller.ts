import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PcrcModelService } from '../services/pcrc-model.service'


@Controller('api/pcrc')
export class PcrcController {

    constructor( private pcrcModel:PcrcModelService ){  }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllPcrc(): Promise<any> {
        return this.pcrcModel.getAllPcrc()
    }
}