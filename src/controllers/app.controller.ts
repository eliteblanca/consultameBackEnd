import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "../services/auth.service";

class user {
    "sub": string
    "name": string
    "rol": string
    "line": string
    "subLine": string
}


@Controller('api')
export class AppController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
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