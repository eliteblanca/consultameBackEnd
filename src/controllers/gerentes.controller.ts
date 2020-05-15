import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CargosModelService } from "../services/cargos-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
import { JwtGuard } from "../guards/jwt.guard";

@Controller('api/gerentes')
export class GerentesController {

    constructor(private cargosModel:CargosModelService){  }

    @UseGuards(JwtGuard)
    @Get(':idGerente/coordis')
    async getDirectorGerentes(
        @Param('idGerente') idGerente: string,
        @User() user: U
    ): Promise<any> {
        return this.cargosModel.getGerenteCoordinadores(idGerente, user.sub)
    }
}