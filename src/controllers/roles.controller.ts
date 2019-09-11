import { Controller, UseGuards, Body, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsModelService, newRolDTO } from "../services/permissions-model.service";


@Controller('api/roles')
export class rolesController {

  constructor(private permissionsModel:PermissionsModelService){  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createRol(
    @Body() body: newRolDTO
  ): any {
    return this.permissionsModel.createRol(body)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getRoles(): any {
    return this.permissionsModel.getRoles()
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  updateRol(
    @Body() body:newRolDTO,
    @Param('id') id:string
  ): any {
    return this.permissionsModel.updateRol(id, body)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteRol(
    @Param('id') id:string
  ): any {
    return this.permissionsModel.deleteRol(id)
  }



}