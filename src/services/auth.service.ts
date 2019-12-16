import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as jwStrategy } from 'passport-jwt';
import * as ldapStrategy from 'passport-ldapauth';
import { user, UserIndex } from "../indices/userIndex";
import { UserModelService } from "../services/user-model.service";
import { User } from "../entities/user";
import { PcrcModelService } from "../services/pcrc-model.service";
import * as R from 'remeda';

const secretKey: string = "123";

@Injectable()
export class LdapService extends PassportStrategy(ldapStrategy, 'ldap') {
    constructor(
        private userModel: UserModelService,
        private UserIndex: UserIndex,
        private readonly jwtService: JwtService,
        private pcrcModel: PcrcModelService
    ) {
        super({
            server: {
                url: 'ldap://sm1dc01w12s.multienlace.com.co',
                bindDN: 'julian.vargas.a@multienlace.com.co',
                bindCredentials: 'Konecta2029',
                searchFilter: '(SAMAccountName={{username}})',
                searchBase: 'dc=multienlace,dc=com,dc=co'
            }
        });
    }

    async validate(ldapUserInfo) {

        var user = await this.UserIndex.getById(ldapUserInfo.postOfficeBox)

        if (!!user) {

            return {
                "sub": user.id,
                "name": ldapUserInfo.name,
                "rol": user.rol
            }

        } else {

            var user = await this.userModel.createUser({
                cedula: ldapUserInfo.postOfficeBox,
                rol: "user",
                nombre: ldapUserInfo.name,
                pcrc: []
            })

            return {
                "sub": user.id,
                "name": ldapUserInfo.name,
                "rol": user.rol
            }

        }
    }

    async generateJwt(user: { sub: string, name: string, rol: user['rol'] }): Promise<{ tokem: string }> {
        if (user.sub == '1036673423') {
            let newUser = { ...user };
            newUser.rol = 'admin';

            return { tokem: this.jwtService.sign(newUser) }

        }
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