import { Controller, Get, Post, UseGuards, Body, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { LdapService } from "../services/auth.service";
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import * as https from "https";
import * as qs from "querystring"
import { RefreshJwtGuard } from "../guards/refreshjwt.guard";
import { userjwtIndex } from "../indices/userjwtIndex";
import { JwtGuard } from "../guards/jwt.guard";
import { User } from '../user.decorator';
import { User as U } from '../entities/user';
class user {
    "sub": string
    "name": string
    "rol": string
    "line": string
    "subLine": string
}


@Controller('api')
export class AppController {
    constructor(
        private authService: LdapService,
        private userjwtIndex: userjwtIndex,
    ) { }

    @UseGuards(AuthGuard('ldap'))
    @Post('authenticate')
    async login(@Req() req, @Res() res: Response) {

        if(process.env.NODE_ENV == 'production'){
            let tokens = {
                token: this.authService.generateJwt(req.user),
                refreshToken: this.authService.generateRefresh_token(req.user)
            }

            let decodedRefresh = this.authService.decodeToken(tokens.refreshToken)

            res.cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
                expires: new Date(decodedRefresh.exp * 1000)
            })

            await this.userjwtIndex.deleteWhere({ user: req.user.sub })

            await this.userjwtIndex.create({ user: req.user.sub })

            res.send(tokens)
        } else {

            let tokens = {
                token: this.authService.generateJwt({ name:"julian andres vargas", rol:'admin', sub:"1036673423" }),
                refreshToken: this.authService.generateRefresh_token({ name:"julian andres vargas", rol:'admin', sub:"1036673423" })
            }

            let decodedRefresh = this.authService.decodeToken(tokens.refreshToken)

            res.cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
                expires: new Date(decodedRefresh.exp * 1000)
            })

            await this.userjwtIndex.deleteWhere({ user: "1036673423" })

            await this.userjwtIndex.create({ user: "1036673423" })

            res.send(tokens)
        }
    }

    @UseGuards(JwtGuard)
    @Get('log_out')
    async logOut(@User() user: U) {
        let deleted = await this.userjwtIndex.deleteWhere({ user: user.sub })
        return { status: 'logout' }
    }

    @UseGuards(RefreshJwtGuard)
    @Get('refresh_token')
    refreshToken(@Req() req, @Res() res: Response) {
        var tokens = {
            token: this.authService.generateJwt(req.user),
            refreshToken: this.authService.generateRefresh_token(req.user)
        }

        let decodedRefresh = this.authService.decodeToken(tokens.refreshToken)

        res.clearCookie('refresh_token', {
            httpOnly: true,
        })

        res.cookie('refresh_token', tokens.refreshToken, {
            httpOnly: true,
            expires: new Date(decodedRefresh.exp * 1000)            
        })

        res.send(tokens)
    }

    @UseGuards(JwtGuard)
    @Get('me')
    currentUser(@Req() req): Promise<user> {
        return req.user
    }

}