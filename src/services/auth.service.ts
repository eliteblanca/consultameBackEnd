import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as jwStrategy } from 'passport-jwt';
import * as ldapStrategy from 'passport-ldapauth';
import { user, UserIndex } from "../indices/userIndex";
import { UserModelService } from "../services/user-model.service";
import { User } from "../entities/user";
const secretKey: string = "123";

@Injectable()
export class LdapService extends PassportStrategy(ldapStrategy, 'ldap') {
    constructor(
        private userModel: UserModelService,
        private UserIndex: UserIndex,
        private readonly jwtService: JwtService
    ) {
        super({
            server: {
                url: 'ldap://sm1dc01w12s.multienlace.com.co',
                bindDN: 'julian.vargas.a@multienlace.com.co',
                bindCredentials: 'Konecta2027',
                searchFilter: '(SAMAccountName={{username}})',
                searchBase: 'dc=multienlace,dc=com,dc=co'
            }
        });
    }

    async validate(ldapUserInfo) {

        console.log(ldapUserInfo)

        try {

            var user = await this.UserIndex.getById(ldapUserInfo.postOfficeBox)

            return {
                "sub": user.id,
                "name": ldapUserInfo.name,
                "rol": user.rol
            }

        } catch (error) {
            if (!error.body.found) {

                var user = await this.userModel.createUser({ cedula: ldapUserInfo.postOfficeBox, rol: "user" })        

                return {
                    "sub": user.id,
                    "name": ldapUserInfo.name,
                    "rol": user.rol
                }
            }
        }

    }

    async generateJwt(user: { sub: string, name: string, rol: user['rol'] }): Promise<{ tokem: string }> {
        return { tokem: this.jwtService.sign(user) }
    }

}

@Injectable()
export class JwtValidator extends PassportStrategy(jwStrategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, 
            secretOrKey: secretKey,
        });
    }

    async validate(user: User): Promise<User> {
        return user
    }
}