import { Controller, UseGuards, Get, Query, Param, Body, Delete, Post, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModelService , deleteUserDTO, newUserDTO, updateUserRolDTO} from "../services/user-model.service";
import { User } from "../user.decorator";
import { User as U } from "../entities/user";

@Controller('api/users')
export class UsersController {

 constructor(private userModel:UserModelService) {  }
 
 @UseGuards(AuthGuard('jwt'))
 @Get()
 getUsers():any{
   return this.userModel.getAllUsers();
 }

 @UseGuards(AuthGuard('jwt'))
 @Delete(':id')
 deleteUser(
  @Param()params:deleteUserDTO
 ):any{
   return this.userModel.deleteUser( params.id );
 }

 @UseGuards(AuthGuard('jwt'))
 @Post()
 registrate(@Body() newUser:newUserDTO):Promise<any> {
   return this.userModel.createUser(newUser);
 }


 @UseGuards(AuthGuard('jwt'))
 @Put(':idUsuario')
 actualizarUsuario(
   @Body() newUser: updateUserRolDTO,
   @Param('idUsuario') idUsuario:string
   ):Promise<any> {
   return this.userModel.updateUserRol(idUsuario, newUser);
 }

 @UseGuards(AuthGuard('jwt'))
 @Get(':idUsuario/allowedlines')
 getUserSubLines(
    @Param('idUsuario') id_usuario
 ):any{
   return this.userModel.getUserSubLines(id_usuario)
 }

 @UseGuards(AuthGuard('jwt'))
 @Post(':idUsuario/allowedlines')
 postUserSubline(
    @Param('idUsuario') id_usuario,
    @Body() body:{ subline:string }
 ):any{
   return this.userModel.postUserSubline(id_usuario,body.subline)
 }

 @UseGuards(AuthGuard('jwt'))
 @Delete(':idUsuario/allowedlines/:idSubline')
 deleteUserSubline(
    @Param('idUsuario') id_usuario,
    @Param('idSubline') idSubline
 ):any{
   return this.userModel.deleteUserSubline(id_usuario, idSubline)
 }

 @UseGuards(AuthGuard('jwt'))
 @Get('me/likes')
 getSelfLikes(@User() user:U
 ):any{
   return this.userModel.getUserLikes(user.sub);
 }

 @UseGuards(AuthGuard('jwt'))
 @Get('me/dislikes')
 getSelfdisLikes(@User() user:U
 ):any{
   return this.userModel.getUserDisLikes(user.sub);
 }

 @UseGuards(AuthGuard('jwt'))
 @Get('me/favorites')
 getSelfFavorites(@User() user:U
 ):any{
   return this.userModel.getUserFavorites(user.sub);
 }
}