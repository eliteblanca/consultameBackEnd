import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { User as U } from "../entities";
import { JwtGuard } from "../guards/jwt.guard";
import { PcrcModelService, postUserPcrcDTO } from "../services/pcrc-model.service";
import { deleteUserDTO, updateUserRolDTO, UserModelService } from "../services/user-model.service";
import { User } from "../user.decorator";
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

    // @UseGuards(JwtGuard)
    // @Get()
    // getUsers(
    //     @Query('query') query:string,
    //     @Query('pcrcId') pcrcId:string
    // ): any {
    //     return this.userModel.searchUsers(query, pcrcId);        
    // }

    // @UseGuards(JwtGuard)
    @Get(':id')
    async getSingleUser(
        @Param('id') documento: string
    ) {
        return await this.userModel.getUserByDocumento(documento);        
    }

    // @UseGuards(JwtGuard)
    // @Delete(':id')
    // deleteUser(
    //     @Param() params: deleteUserDTO
    // ): any {
    //     return this.userModel.deleteUser(params.id);
    // }

    // @UseGuards(JwtGuard)
    // @Put(':idUsuario')
    // actualizarUsuario(
    //     @Body() newUser: updateUserRolDTO,
    //     @Param('idUsuario') idUsuario: string
    // ): Promise<any> {
    //     return this.userModel.updateUserRol(idUsuario, newUser);
    // }

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

    // @UseGuards(JwtGuard)
    // @Get(':cedula/pcrc')
    // getUserPcrc(        
    //     @User() user: U,
    //     @Param('cedula') cedula:string
    // ): any {
    //     console.log(user)
    //     return this.pcrcModel.getUserPcrc(cedula)
    // }

    // @UseGuards(JwtGuard)
    // @Post(':cedula/pcrc')
    // async postUserPcrc(
    //     @Param('cedula') cedula:string,
    //     @Body() body:postUserPcrcDTO,
    //     @User() user: U
    // ){
    //     try {
    //         return await this.pcrcModel.postUserPcrc(cedula, body.pcrc, user.sub)
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    // @UseGuards(JwtGuard)
    // @Delete(':cedula/pcrc/:pcrc')
    // deleteUserPcrc(
    //     @Param('cedula') cedula:string,
    //     @Param('pcrc') pcrc:string,
    //     @User() user: U
    // ): any {
    //     return this.pcrcModel.deleteUserPcrc(cedula, pcrc, user.sub)
    // }

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