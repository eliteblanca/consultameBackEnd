import { Body, Controller, HttpCode, Post, UseGuards, Get, Put, Param, Delete } from '@nestjs/common';
import { JwtGuard } from "../guards/jwt.guard";
import { perfilDTO, PermisionsModelService, permisoDTO } from "../services/permisions-model.service";


@Controller('api/perfiles')
export class PerfilesController {

    constructor(
        private permisionsModel:PermisionsModelService
    ){  }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Post('')
    async createPerfil(
        @Body() perfilDTO:perfilDTO
    ){
        let result = await this.permisionsModel.crearPerfil(perfilDTO.nombre)
        return {
            status:'created'
        }
    }

    //! modificar para que solo retorne los perfiles a los que tiene permiso el usuario
    @UseGuards(JwtGuard)
    @Get('')
    async getPerfiles(){
        return await this.permisionsModel.getPerfiles()
    }

    @UseGuards(JwtGuard)
    @Put(':id')
    async actualizarPerfil(
        @Param('id') idPerfil:string,
        @Body() perfilDTO:perfilDTO
    ){
        return await this.permisionsModel.actualizarPerfil(idPerfil, perfilDTO.nombre)
    }

    @UseGuards(JwtGuard)
    @Delete(':id')
    async deletePerfil(
        @Param('id') idPerfil:string
    ){
        return await this.permisionsModel.borrarPerfil(idPerfil)
    }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Post(':id/permisos')
    async asignarPermiso(
        @Body() permisoDTO:permisoDTO,
        @Param('id') idPerfil:string
    ){
        let result = await this.permisionsModel.asignarPermiso(idPerfil ,permisoDTO)
        return {
            status:'created'
        }
    }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Get(':id/permisos')
    async getPermisos(
        @Param('id') idPerfil:string
    ){
        return await this.permisionsModel.getPermisos(idPerfil)
    }

    

}