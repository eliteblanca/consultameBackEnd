import { Controller, UseGuards, Get, Query, Param, Body, Delete, Post, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModelService, deleteUserDTO, updateUserRolDTO } from "../services/user-model.service";
import { User } from "../user.decorator";
import { User as U } from "../entities/user";
import { PcrcModelService, postUserPcrcDTO } from "../services/pcrc-model.service";


@Controller('api/users')
export class UsersController {

    constructor(
        private userModel: UserModelService,
        private pcrcModel:PcrcModelService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers(): any {
        return this.userModel.getAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(
        @Param() params: deleteUserDTO
    ): any {
        return this.userModel.deleteUser(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':idUsuario')
    actualizarUsuario(
        @Body() newUser: updateUserRolDTO,
        @Param('idUsuario') idUsuario: string
    ): Promise<any> {
        return this.userModel.updateUserRol(idUsuario, newUser);
    }  

    @UseGuards(AuthGuard('jwt'))
    @Get('me/likes')
    getSelfLikes(@User() user: U
    ): any {
        return this.userModel.getUserLikes(user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me/dislikes')
    getSelfdisLikes(@User() user: U
    ): any {
        return this.userModel.getUserDisLikes(user.sub);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me/favorites')
    getSelfFavorites(
        @User() user: U,
        @Query('from') from: string,
        @Query('size') size: string
    ): any {
        return this.userModel.getUserFavorites(user.sub,from,size);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':cedula/pcrc')
    getUserPcrc(
        @Param('cedula') cedula:string
    ): any {
        return this.pcrcModel.getUserPcrc(cedula)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':cedula/pcrc')
    postUserPcrc(
        @Param('cedula') cedula:string,
        @Body() body:postUserPcrcDTO
    ): any {
        return this.pcrcModel.postUserPcrc(cedula, body.pcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':cedula/pcrc/:pcrc')
    deleteUserPcrc(
        @Param('cedula') cedula:string,
        @Param('pcrc') pcrc:string
    ): any {
        return this.pcrcModel.deleteUserPcrc(cedula, pcrc)
    }
}