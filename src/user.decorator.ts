import { createParamDecorator } from '@nestjs/common';
import { User as U } from "./entities/user";

export const User = createParamDecorator((data, req):U => {
  return req.user;
});