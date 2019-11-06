import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LdapService } from "../services/auth.service";

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
}