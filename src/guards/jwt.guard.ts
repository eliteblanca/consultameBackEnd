import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map, catchError } from "rxjs/operators"
import { Response, Request } from 'express';
import { LdapService } from "../services/auth.service";
import { userjwtIndex } from "../indices/userjwtIndex";
import { UserjwtModelService } from "../services/userjwt.service";

@Injectable()
export class JwtGuard implements CanActivate {

  constructor(
    private ldapService:LdapService,
    private userjwtIndex:userjwtIndex,
    private userjwtModel:UserjwtModelService,

  ){   }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {

    let validator = async () => {

      let ctx = context.switchToHttp()
      let req = ctx.getRequest<Request>()
  
      if(!!!req.headers.authorization){
        return false
      }
      
      if(!req.headers.authorization.startsWith('Bearer ')){
        return false
      }
      
      if(req.headers.authorization.split('Bearer ').length < 2){
        return false
      }
      
      let token = req.headers.authorization.split('Bearer ')[1]
      
      try {
        var tokenPayLoad = this.ldapService.validateJwt(token)
      } catch(error) {
        return false
      }
  
      req.user = {
        "sub":tokenPayLoad.sub,
        "name":tokenPayLoad.name,
        "rol":tokenPayLoad.rol
      }
  
      let tokens = await this.userjwtModel.getJWT( tokenPayLoad.sub )

      if(tokens.length == 0){
        return false
      } else {
        return true        
      }
    }

    return validator()

  }
}
