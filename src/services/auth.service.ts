import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as jwt from "jsonwebtoken";
import { ExtractJwt, Strategy as jwStrategy } from 'passport-jwt';
import * as ldapStrategy from 'passport-ldapauth';
import { User } from "../entities/user";
import { user, UserIndex } from "../indices/userIndex";
import { userjwtIndex } from "../indices/userjwtIndex";
import { UserModelService } from "../services/user-model.service";


export type token = {sub:string, name:string, rol:string, iat:number, exp:number }

@Injectable()
export class LdapService extends PassportStrategy(ldapStrategy, 'ldap') {
    constructor(
        private userModel: UserModelService,
        private UserIndex: UserIndex,
        private userjwtIndex: userjwtIndex,
    ) {
        super({
            server: {
                url: 'ldap://172.20.1.220',
                bindDN: process.env.BIND_DN,
                bindCredentials: process.env.BIND_CREDENTIALS,
                searchFilter: '(SAMAccountName={{username}})',
                searchBase: 'dc=multienlace,dc=com,dc=co'
            }
        });
    }

    async validate(ldapUserInfo) {

        var user = await this.userModel.getUserByDocumento(ldapUserInfo.postOfficeBox)

        if (await user.length > 0) {

            return {
                "sub": user[0].id,
                "name": ldapUserInfo.name,
            }

        } else {

            var newuser = await this.userModel.createUser(
                ldapUserInfo.name,
                ldapUserInfo.postOfficeBox,
            )

            return {
                "sub": newuser.id,
                "name": ldapUserInfo.name,
            }
        }
    }

    generateJwt(user: { sub: string, name: string }) {
        return jwt.sign(
            user
            , process.env.JWT_PRIVATE_KEY,
            {
                expiresIn:'5m'
            }
        )
    }

    generateRefresh_token(user: { sub: string, name: string }){   
        return jwt.sign(
            user
            , process.env.REFRESH_JWT_PRIVATE_KEY,
            {
                expiresIn:'10h'
            }
        )
    }

    validateJwt(token:string){
        return jwt.verify(token, process.env.JWT_PRIVATE_KEY) as token
    }

    validateRefreshJwt(token:string){
        return jwt.verify(token, process.env.REFRESH_JWT_PRIVATE_KEY) as token
    }

    decodeToken(token):token{
        let tokens = jwt.decode(token) as token
        return tokens
    }

}