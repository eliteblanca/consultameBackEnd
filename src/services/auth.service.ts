import { Injectable, UnauthorizedException } from '@nestjs/common';
import { promises } from 'fs';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt, Strategy as jwStrategy } from 'passport-jwt';
import { User } from "../entities/user";

const secretKey:string = "123";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {

    constructor( private readonly jwtService: JwtService) { super(); }

    async validate(username: string, password: string):Promise<User>{
        if(username == "julian" && password == "123"){
            return {
                "sub": "1234567890",
                "name": "Julian",
                "rol": "admin",
                "line": "all",
                "subLine": ""
            }

            // {tokem:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1bGlhbiIsInJvbCI6ImFkbWluIiwibGluZSI6ImFsbCIsInN1YkxpbmUiOiIifQ.SkMKVjzCyzHQTvHq7MvEf_VCBldjhdHnLm6-1WBiodk"}

        }else{
            throw new UnauthorizedException();
        }
    }

    async generateJwt(user):Promise<{tokem:string}>{
        return {tokem:this.jwtService.sign(user)}
    }
}

@Injectable()
export class JwtValidator extends PassportStrategy(jwStrategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true, //change to false on production
          secretOrKey: secretKey,
        });
      }

      async validate(user: User):Promise<User> {
        return user
      }
}
