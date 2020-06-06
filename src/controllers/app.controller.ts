import { Controller, Get, Post, UseGuards, Body, Res, Req, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { LdapService } from "../services/auth.service";
import { UserjwtModelService } from "../services/userjwt.service";
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
        private userjwtModel:UserjwtModelService
    ) { }

    @UseGuards(AuthGuard('ldap'))
    @Post('authenticate')
    @HttpCode(200)
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

            await this.userjwtModel.borrarJWT(req.user.sub)

            await this.userjwtModel.crearJWT(req.user.sub)

            res.send(tokens)
        } else {

            let tokens = {
                token: this.authService.generateJwt({ name:"julian andres vargas", sub:"7" }),
                refreshToken: this.authService.generateRefresh_token({ name:"julian andres vargas", sub:"7" })
            }

            let decodedRefresh = this.authService.decodeToken(tokens.refreshToken)

            res.cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
                expires: new Date(decodedRefresh.exp * 1000)
            })

            await this.userjwtModel.borrarJWT("7")

            await this.userjwtModel.crearJWT("7")

            res.send(tokens)
        }
    }

    @UseGuards(JwtGuard)
    @Get('log_out')
    async logOut(@Req() req, @Res() res: Response) {

        res.clearCookie('refresh_token', {
            httpOnly: true,
        })

        let deleted = await this.userjwtModel.borrarJWT(req.user.sub)

        res.send({ status: 'logout' })

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

    @Post('validateCaptcha')
    async validateCaptcha(
        @Body() body: { token: string }
    ) {

        var RECAPTCHA_KEY = process.env.RECAPTCHA_KEY


        const axiosInstance = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });


        let googleResponse = await axiosInstance.post('https://www.google.com/recaptcha/api/siteverify',
            qs.stringify({
                secret: RECAPTCHA_KEY,
                response: body.token
            })
        )

        return googleResponse.data

    }
}