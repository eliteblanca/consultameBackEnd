import { Controller, UseGuards, Get, Query, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ModelService } from "../services/model.service";

@Controller('api/users')
export class UsersController {

  constructor(private modelService:ModelService) {}

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
   return this.modelService.userLines(id_usuario);
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
   return this.modelService.userSubLines(id_usuario, id_linea);
 }

}