import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response, Request } from 'express';

@Injectable()
export class MockLdapGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    let ctx = context.switchToHttp()
    let req = ctx.getRequest<Request>()

    req.user = {
      "sub":'1036673423',
      "name":'julian andres vargas arboleda',
      "rol":'admin'
    }

    return true

  }
}
