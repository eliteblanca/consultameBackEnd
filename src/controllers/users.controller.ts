import { Controller, UseGuards, Get, Query, Param, Body, Delete, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModelService , deleteUserDTO, newUserDTO} from "../services/user-model.service";
@Controller('api/users')
export class UsersController {

  constructor(private userModel:UserModelService) {  }

  /**
  * #### URI: api/users
  * ***
  * Retorna todos los usuarios de la herramienta
  * ***
  * - Method: `GET`
  * 
  * - Body: `none`
  *
  * - return: `User[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Get()
 getUsers():any{
   return this.userModel.getAllUsers();
 }

  /**
  * #### URI: api/users/:id
  * ***
  * Elimina a un usuario de la herramienta
  * ***
  * - Method: `DELETE`
  * 
  * - Body: `none`
  *
  * - return: `none`
  */
 @UseGuards(AuthGuard('jwt'))
 @Delete(':id')
 deleteUser(
  @Param()params:deleteUserDTO
 ):any{
   return this.userModel.deleteUser( params.id );
 }

  /**
  * #### URI: api/users
  * ***
  * agrega un nuevo usuario a la herramienta
  * ***
  * - Method: `POST`
  * 
  * - Body: `{username: string, password: string, rol:string, subLines:string[]}`
  *
  * - return: `{username: string, rol:string, id:string, subLines:string[] }`
  */
 @UseGuards(AuthGuard('jwt'))
 @Post()
 registrate(@Body() newUser:newUserDTO):Promise<any> {
   return this.userModel.createUser(newUser);
 }

  /**
  * #### URI: :idUsuario/lines
  * ***
  * Retorna una lista de las lineas a las cuales el usuario tiene acceso
  * ***
  * - Method: `GET`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Get(':idUsuario/lines')
 getUserLines(
    @Param('idUsuario') id_usuario
 ):any{
   console.log('id_usuario')
   return this.userModel.userLines(id_usuario);
 }

  /**
  * #### URI: :idUsuario/lines/:lineId/sublines
  * ***
  * Retorna una lista de las sublineas a las cuales el usuario tiene acceso
  * ***
  * - Method: `GET`
  * 
  * - Body: `none`
  *
  * - return: `string[]`
  */
 @UseGuards(AuthGuard('jwt'))
 @Get(':idUsuario/lines/:idLinea/sublines')
 getUserSubLines(
    @Param('idUsuario') id_usuario,
    @Param('idLinea') id_linea,
 ):any{
   console.log('id_usuario')
   return this.userModel.userSubLines(id_usuario, id_linea);
 }
 
}