import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CargosModelService } from "../services/cargos-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
import { JwtGuard } from "../guards/jwt.guard";

@Controller('api/coordinadores')
export class CoordinadoresController {

    constructor(private cargosModel:CargosModelService){  }

    @UseGuards(JwtGuard)
    @Get(':idCoordinador/lideres')
    async getDirectorGerentes(
        @Param('idCoordinador') idCoordinador: string,
        @User() user: U
    ): Promise<any> {
        return this.cargosModel.getCoordinadorLideres(idCoordinador, user.sub)
    }
}