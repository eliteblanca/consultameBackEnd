import { Controller, UseGuards, Get, Query, Param, Body, Delete, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModelService , deleteUserDTO, newUserDTO} from "../services/user-model.service";
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
 @Get(':idUsuario/lines')
 getUserLines(
    @Param('idUsuario') id_usuario
 ):any{
   console.log('id_usuario')
   return this.userModel.userLines(id_usuario);
 }

 @UseGuards(AuthGuard('jwt'))
 @Get(':idUsuario/lines/:idLinea/sublines')
 getUserSubLines(
    @Param('idUsuario') id_usuario,
    @Param('idLinea') id_linea,
 ):any{
   return this.userModel.userSubLines(id_usuario, id_linea);
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