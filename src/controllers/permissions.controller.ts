import { Controller, UseGuards, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsModelService, newPermissionDTO } from "../services/permissions-model.service";

@Controller('api/permissions')
export class PermissionsController {

    constructor(private permissionsModel: PermissionsModelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createPermission(
        @Body() body: newPermissionDTO
    ): any {
        return this.permissionsModel.createPermission(body)
    }



}