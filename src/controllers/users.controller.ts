import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, HttpCode } from '@nestjs/common';
import { User as U } from "../entities";
import { JwtGuard } from "../guards/jwt.guard";
import { BaseModelService, postUserPcrcDTO } from "../services/base-model.service";
import { deleteUserDTO, updateUserRolDTO, UserModelService, createUserDTO } from "../services/user-model.service";
import { User } from "../user.decorator";
import { UsersesionsModelService, sesionDTO, updateSesionDTO } from "../services/usersesions-model.service";
import { UserNotificationsModelService, userNotificationDTO } from "../services/userNotifications-model.service";
import { asignarPerfilDTO, PermisionsModelService } from '../services/permisions-model.service'
@Controller('api/users')
export class UsersController {

    constructor(
        private userModel: UserModelService,
        private baseModel: BaseModelService,
        private usersesionsModel: UsersesionsModelService,
        private userNotificationsModel: UserNotificationsModelService,
        private permisionsModel: PermisionsModelService,
        ) {  }

    @UseGuards(JwtGuard)
    @Get()
    getUsers(
        @Query('query') query:string,
        @Query('pcrcId') pcrcId:string
    ): any {
        return this.userModel.searchUsers(query, pcrcId);        
    }

    @UseGuards(JwtGuard)
    @Post()
    @HttpCode(200)
    createUser(
        @Body() userDto:createUserDTO,
    ): any {
        return this.userModel.createUser(userDto.nombre, userDto.documento);        
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    async getSingleUser(
        @Param('id') user_id: string
    ) {
        return await this.userModel.getUserById(user_id);
    }

    @UseGuards(JwtGuard)
    @Delete(':id')
    async deleteSingleUser(
        @Param('id') user_id: string
    ) {
        return await this.userModel.deleteUser(user_id);
    }

    @Post(':id/perfiles')
    @UseGuards(JwtGuard)
    @HttpCode(200)
    async asignPerfilToUser(
        @Param('id') userId: string,
        @Body() perfil: asignarPerfilDTO
    ) {
        await this.permisionsModel.asignarPerfil(userId, perfil.perfil)
        return {
            status:'created'
        }
    }

    @Get(':id/perfiles')
    @UseGuards(JwtGuard)
    @HttpCode(200)
    async getUserPerfiles(
        @Param('id') userId: string
    ) {
        return await this.permisionsModel.getUserPerfiles(userId)
    }

    @Delete(':id/perfiles/:idPerfil')
    @UseGuards(JwtGuard)
    @HttpCode(200)
    async disasignPerfilToUser(
        @Param('id') userId: string,
        @Param('idPerfil') perfilId: string,
    ) {
        await this.permisionsModel.desasignarPerfil(userId, perfilId)
        return {
            status:'deleted'
        }
    }

    // @UseGuards(JwtGuard)
    // @Get('me/likes')
    // getSelfLikes(@User() user: U
    // ): any {
    //     return this.userModel.getUserLikes(user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Get('me/dislikes')
    // getSelfdisLikes(
    //     @User() user: U
    // ): any {
    //     return this.userModel.getUserDisLikes(user.sub);
    // }

    // @UseGuards(JwtGuard)
    // @Get('me/favorites')
    // getSelfFavorites(
    //     @User() user: U,
    //     @Query('from') from: string,
    //     @Query('size') size: string
    // ): any {
    //     return this.userModel.getUserFavorites(user.sub,from,size);
    // }

    @UseGuards(JwtGuard)
    @Get(':idUser/pcrc')
    getUserPcrc(        
        @Param('idUser') idUser:string
    ): any {
        return this.baseModel.getUserBases(idUser)
    }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Post(':userId/pcrc')
    async postUserPcrc(
        @Param('userId') userId:string,
        @Body() body:postUserPcrcDTO,
        @User() user: U
    ){
        return await this.baseModel.postUserBase(userId, body.pcrc, user.sub)
    }

    @UseGuards(JwtGuard)
    @Delete(':user_id/pcrc/:base_id')
    deleteUserPcrc(
        @Param('user_id') idUser:string,
        @Param('base_id') baseId:string,
        @User() user: U
    ): any {
        return this.baseModel.deleteUserBase(idUser, baseId)
    }

    @UseGuards(JwtGuard)
    @Delete(':user_id/pcrc')
    deleteAllUserPcrc(
        @Param('user_id') idUser:string,
        @User() user: U
    ): any {
        return this.baseModel.deleteUserBase(idUser, 'todos', user.sub)
    }

    // @UseGuards(JwtGuard)
    // @Post('me/sesion')
    // postUserSesion(
    //     @Body() body:sesionDTO,
    //     @User() user: U
    // ): any {
    //     return this.usersesionsModel.postUserSesion(user.sub, body)
    // }

    // @UseGuards(JwtGuard)
    // @Put('me/sesion/:id')
    // updateUserSesion(
    //     @Param('id') id:string,
    //     @Body() body:updateSesionDTO,
    //     @User() user: U
    // ): any {
    //     return this.usersesionsModel.udpateUserSesion(id, body)
    // }

    // @UseGuards(JwtGuard)
    // @Get(':id/sesion')
    // getUserSessions(
    //     @Param('id') id:string,
    //     @Query('from') from:string,
    //     @Query('size') size:string,
    //     @Query('pcrc') pcrc:string,
    //     @User() user: U
    // ): any {
    //     return this.usersesionsModel.getUserSesions(id, pcrc, from, size)
    // }

    // @UseGuards(JwtGuard)
    // @Post('me/notification')
    // postUserNotification(
    //     @Body() body:userNotificationDTO,
    //     @User() user: U
    // ): any {
    //     return this.userNotificationsModel.postUserNotification(body, user.sub)
    // }

    // @UseGuards(JwtGuard)
    // @Get('me/notification')
    // getUserNotification(
    //     @Query('pcrc') pcrc:string,
    //     @User() user: U
    // ): any {
    //     return this.userNotificationsModel.getUserNotifications(user.sub, pcrc)
    // }

    // @UseGuards(JwtGuard)
    // @Delete('me/notification/:id')
    // deleteUserNotification(        
    //     @Param('id') id:string,
    //     @User() user: U
    // ): any {
    //     return this.userNotificationsModel.deleteUserNotification(id, user.sub)
    // }

    // @UseGuards(JwtGuard)
    // @Delete('me/notification')
    // deleteAllUserNotification(
    //     @Query('pcrc') pcrc:string,
    //     @User() user: U
    // ): any {
    //     return this.userNotificationsModel.deleteAllUserNotification(user.sub, pcrc)
    // }
}