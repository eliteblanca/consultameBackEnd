import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LdapService } from "../services/auth.service";
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import * as https from "https";
import * as qs from "querystring"
class user {
    "sub": string
    "name": string
    "rol": string
    "line": string
    "subLine": string
}


@Controller('api')
export class AppController {
    constructor(private authService: LdapService) { }

    @UseGuards(AuthGuard('ldap'))
    @Post('authenticate')
    login(@Request() req): Promise<{ tokem: string }> {
        return this.authService.generateJwt(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    currentUser(@Request() req): Promise<user> {
        return req.user
    }

    @UseGuards()
    @Post('validateCaptcha')
    async validateCaptcha(
        @Body() body:{ token:string }
    ) {

        var RECAPTCHA_KEY = process.env.RECAPTCHA_KEY        
        

        const axiosInstance = axios.create({
            httpsAgent: new https.Agent({  
              rejectUnauthorized: false
            })
          });


        let googleResponse = await axiosInstance.post('https://www.google.com/recaptcha/api/siteverify', 
            qs.stringify({
                secret:RECAPTCHA_KEY,
                response:body.token
            })
        )

        return googleResponse.data

    }
}