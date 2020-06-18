import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response, Request } from 'express';
import { LdapService } from "../services/auth.service";
import { userjwtIndex } from "../indices/userjwtIndex";

@Injectable()
export class RefreshJwtGuard implements CanActivate {

  constructor(
    private ldapService:LdapService,
    private userjwtIndex:userjwtIndex,
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
  
        let tokens = await this.userjwtIndex.where({ user:tokenPayLoad.sub })
  
        if(tokens.length == 0){
          return false
        } else {
          return true        
        }
      } else {

        

        let ctx = context.switchToHttp()  
        let req = ctx.getRequest<Request>()
    
        req.user = { name:"julian andres vargas", rol:'admin', sub:"1036673423" }
  
        let tokens = await this.userjwtIndex.where({ user:"1036673423" })
  
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
