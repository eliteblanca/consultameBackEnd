import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response, Request } from 'express';
import { LdapService } from "../services/auth.service";
import { userjwtIndex } from "../indices/userjwtIndex";
import { UserjwtModelService } from "../services/userjwt.service";

@Injectable()
export class RefreshJwtGuard implements CanActivate {

  constructor(
    private ldapService:LdapService,
    private userjwtIndex:userjwtIndex,
    private userjwtModel:UserjwtModelService,
  ){   }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {

    let validator = async () => {
      if( process.env.NODE_ENV == 'production' ){


        let ctx = context.switchToHttp()  
        let req = ctx.getRequest<Request>()
    
        let token = req.cookies.refresh_token      
  
        if(!!!token){
          return false
        }
    
        try {
          var tokenPayLoad = this.ldapService.validateRefreshJwt(token)
        } catch(err){
          return false
        }
    
        req.user = {
          "sub":tokenPayLoad.sub,
          "name":tokenPayLoad.name,
          "rol":tokenPayLoad.rol
        }

        let tokens = await this.userjwtModel.getJWT(tokenPayLoad.sub)

        if(tokens.length == 0){
          return false
        } else {
          return true        
        }
      } else {

        let ctx = context.switchToHttp()  
        let req = ctx.getRequest<Request>()
    
        req.user = { name:"julian andres vargas", sub:"7" }
  
        let tokens = await this.userjwtModel.getJWT("7")
  
        if(tokens.length == 0){
          return false
        } else {
          return true        
        }

      }

    }

    return validator() 

  }
}
