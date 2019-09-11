import { Controller, UseGuards, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsModelService, newResourceDTO } from "../services/permissions-model.service";

@Controller('api/resources')
export class ResourcesController {

    constructor(private permissionsModel: PermissionsModelService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createResource(
        @Body() body: newResourceDTO
    ): any {
        return this.permissionsModel.createResource(body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getResources(): any {
        return this.permissionsModel.getResources()
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateResource(
        @Body() body: newResourceDTO,
        @Param('id') id: string
    ): any {
        return this.permissionsModel.updateResource(id, body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteResource(
        @Param('id') id: string
    ): any {
        return this.permissionsModel.deleteResource(id)
    }

}