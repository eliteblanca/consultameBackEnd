import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CargosModelService } from "../services/cargos-model.service";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
import { JwtGuard } from "../guards/jwt.guard";

@Controller('api/clientes')
export class ClientesController {

    constructor(
        private cargosModel:CargosModelService
    ){  }

    @UseGuards(JwtGuard)
    @Get(':idCliente/directors')
    async getClientDirectors(
        @Param('idCliente') idCliente: string,
        @User() user: U
    ): Promise<any> {
        return this.cargosModel.getClientDirectors(idCliente, user.sub)
    }    
}