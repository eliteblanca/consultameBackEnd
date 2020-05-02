import { createParamDecorator } from '@nestjs/common';
import { User as U } from "./entities/user";

export const User = createParamDecorator((data, req):U => {
  if(req.args[0]?.user){
    return req.args[0].user;
  }
  if(req.user){
    return req.user
  }
});