import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CargosModelService } from "../services/cargos-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';

@Controller('api/directores')
export class DirectoresController {

    constructor(private cargosModel:CargosModelService){ }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idDirector/gerentes')
    async getDirectorGerentes(
        @Param('idDirector') idDirector: string,        
        @User() user: U
    ): Promise<any> {
        return this.cargosModel.getDirectorGerentes(idDirector, user.sub)
    }

}