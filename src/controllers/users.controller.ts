import { Controller, UseGuards, Get, Query, Param, Body, Delete, Post, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModelService, deleteUserDTO, updateUserRolDTO } from "../services/user-model.service";
import { User } from "../user.decorator";
import { User as U } from "../entities/user";
import { PcrcModelService, postUserPcrcDTO } from "../services/pcrc-model.service";
import { UsersesionsModelService, sesionDTO, updateSesionDTO } from "../services/usersesions-model.service";
import { UserNotificationsModelService, userNotificationDTO } from "../services/userNotifications-model.service";

@Controller('api/users')
export class UsersController {

    constructor(
        private userModel: UserModelService,
        private pcrcModel:PcrcModelService,
        private usersesionsModel:UsersesionsModelService,
        private userNotificationsModel:UserNotificationsModelService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers(
        @Query('query') query:string
    ): any {
        if(!!query) {
            return this.userModel.searchUsers(query);
        } else {
            return this.userModel.getAllUsers();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':idUsuario')
    getSingleUser(
        @Param('idUsuario') idUsuario:string
    ): any {
        return this.userModel.getUser(idUsuario)
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
    getSelfdisLikes(
        @User() user: U
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
        @Body() body:postUserPcrcDTO,
        @User() user: U
    ): any {
        return this.pcrcModel.postUserPcrc(cedula, body.pcrc, user.sub)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':cedula/pcrc/:pcrc')
    deleteUserPcrc(
        @Param('cedula') cedula:string,
        @Param('pcrc') pcrc:string,
        @User() user: U
    ): any {
        return this.pcrcModel.deleteUserPcrc(cedula, pcrc, user.sub)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('me/sesion')
    postUserSesion(
        @Body() body:sesionDTO,
        @User() user: U
    ): any {
        return this.usersesionsModel.postUserSesion(user.sub, body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('me/sesion/:id')
    updateUserSesion(
        @Param('id') id:string,
        @Body() body:updateSesionDTO,
        @User() user: U
    ): any {
        return this.usersesionsModel.udpateUserSesion(id, body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id/sesion')
    getUserSessions(
        @Param('id') id:string,
        @Query('from') from:string,
        @Query('size') size:string,
        @Query('pcrc') pcrc:string,
        @User() user: U
    ): any {
        return this.usersesionsModel.getUserSesions(id, pcrc, from, size)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('me/notification')
    postUserNotification(
        @Body() body:userNotificationDTO,
        @User() user: U
    ): any {
        return this.userNotificationsModel.postUserNotification(body, user.sub)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me/notification')
    getUserNotification(
        @Query('pcrc') pcrc:string,
        @User() user: U
    ): any {
        return this.userNotificationsModel.getUserNotifications(user.sub, pcrc)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('me/notification/:id')
    deleteUserNotification(        
        @Param('id') id:string,
        @User() user: U
    ): any {
        return this.userNotificationsModel.deleteUserNotification(id, user.sub)
    }
}