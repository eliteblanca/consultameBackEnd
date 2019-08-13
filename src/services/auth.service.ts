import { Injectable, UnauthorizedException } from '@nestjs/common';
import { promises } from 'fs';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt, Strategy as jwStrategy } from 'passport-jwt';
import { User } from "../entities/user";
import { UserModelService } from "../services/user-model.service";
const secretKey:string = "123";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {

    constructor( private readonly jwtService: JwtService, private userModel:UserModelService) { super(); }

    async validate(username: string, password: string):Promise<User>{

        let usersWithName = await this.userModel.getUserByName(username);

        if(usersWithName.length && usersWithName[0].password == password ){
            return {
                "sub": usersWithName[0].id,
                "name": usersWithName[0].username,
                "rol": usersWithName[0].rol
            }
        }else{
            throw new UnauthorizedException();
        }
            // {tokem:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1bGlhbiIsInJvbCI6ImFkbWluIiwibGluZSI6ImFsbCIsInN1YkxpbmUiOiIifQ.SkMKVjzCyzHQTvHq7MvEf_VCBldjhdHnLm6-1WBiodk"}
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