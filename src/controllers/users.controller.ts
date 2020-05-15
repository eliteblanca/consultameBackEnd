import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { User as U } from "../entities/user";
import { JwtGuard } from "../guards/jwt.guard";
import { PcrcModelService, postUserPcrcDTO } from "../services/pcrc-model.service";
import { deleteUserDTO, updateUserRolDTO, UserModelService } from "../services/user-model.service";
import { User } from "../user.decorator";

@Controller('api/users')
export class UsersController {

    constructor(
        private userModel: UserModelService,
        private pcrcModel:PcrcModelService
    ) { }

    @UseGuards(JwtGuard)
    @Get()
    getUsers(
        @Query('query') query:string,
        @Query('pcrcId') pcrcId:string
    ): any {
        return this.userModel.searchUsers(query, pcrcId);        
    }

    // @UseGuards(JwtGuard)
    // @Get(':idUsuario')
    // getSingleUser(
    //     @Param('idUsuario') idUsuario:string
    // ): any {
    //     return this.userModel.getUser(idUsuario)
    // }

    @UseGuards(JwtGuard)
    @Delete(':id')
    deleteUser(
        @Param() params: deleteUserDTO
    ): any {
        return this.userModel.deleteUser(params.id);
    }

    @UseGuards(JwtGuard)
    @Put(':idUsuario')
    actualizarUsuario(
        @Body() newUser: updateUserRolDTO,
        @Param('idUsuario') idUsuario: string
    ): Promise<any> {
        return this.userModel.updateUserRol(idUsuario, newUser);
    }  

    @UseGuards(JwtGuard)
    @Get('me/likes')
    getSelfLikes(@User() user: U
    ): any {
        return this.userModel.getUserLikes(user.sub);
    }

    @UseGuards(JwtGuard)
    @Get('me/dislikes')
    getSelfdisLikes(
        @User() user: U
    ): any {
        return this.userModel.getUserDisLikes(user.sub);
    }

    @UseGuards(JwtGuard)
    @Get('me/favorites')
    getSelfFavorites(
        @User() user: U,
        @Query('from') from: string,
        @Query('size') size: string
    ): any {
        return this.userModel.getUserFavorites(user.sub,from,size);
    }

    @UseGuards(JwtGuard)
    @Get(':cedula/pcrc')
    getUserPcrc(        
        @User() user: U,
        @Param('cedula') cedula:string
    ): any {
        console.log(user)
        return this.pcrcModel.getUserPcrc(cedula)
    }

    @UseGuards(JwtGuard)
    @Post(':cedula/pcrc')
    async postUserPcrc(
        @Param('cedula') cedula:string,
        @Body() body:postUserPcrcDTO,
        @User() user: U
    ){
        try{
            return await this.pcrcModel.postUserPcrc(cedula, body.pcrc, user.sub)
        }catch(error){
            console.log(error)
        }
    }

    @UseGuards(JwtGuard)
    @Delete(':cedula/pcrc/:pcrc')
    deleteUserPcrc(
        @Param('cedula') cedula:string,
        @Param('pcrc') pcrc:string,        
        @User() user: U
    ): any {
        return this.pcrcModel.deleteUserPcrc(cedula, pcrc, user.sub)
    }
}