import { Controller, Get, Post, Body, UseGuards,  Request  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "../services/auth.service";
import { JwtModule } from '@nestjs/jwt';

class user {
  "sub":string
  "name":string
  "rol":string
  "line":string
  "subLine":string
}

const enum EndPoints {
  login = "authenticate",
  currentUser = "me"
}
  /**
  * #### URI base: api/
  * ***
  * Maneja todas las peticiones a la api
  * ***
  * #### Members:
  * ***
  * `login`: Verifica las credenciales de inicio de sesion del usuario
  * ***
  * `currentUser`: Retorna la informacion del usuario actual
  */
@Controller('api')
export class AppController {
  constructor(private authService:AuthService) {}

  /**
  * #### URI: api/authenticate
  * ***
  * Verifica las credenciales de inicio de sesion del usuario
  * ***
  * - Method: `POST`
  * 
  * - Body: `{username: string, password: string}`
  *
  * - return: `{tokem:  string}`
  */
  @UseGuards(AuthGuard('local'))
  @Post(EndPoints.login)
  login(@Request() req):Promise<{tokem:string}> {
    return this.authService.generateJwt(req.user);
  }

  /**
  * #### URI: api/me
  * ***
  * Retorna la informacion del usuario actual
  * ***
  * - Method: `POST`
  * 
  * - Body: `none`
  *
  * - return: `user`
  */
  @UseGuards(AuthGuard('jwt'))
  @Get(EndPoints.currentUser)
  currentUser(@Request() req):Promise<user>{
    return req.user
  }



}