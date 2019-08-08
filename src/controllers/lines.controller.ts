import { Controller, UseGuards, Get, Query, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriesModelService } from "../services/categories-model.service";
import { User } from 'src/entities/user';
@Controller('api/lines')
export class LinesController {

  constructor(private categoriesModel: CategoriesModelService) { }

  /**
  * #### URI: api/lines/
  * ***
  * Agrega una nueva linea a la BBDD
  * ***
  * - Method: `POST`
  * 
  * - Body: `{name:string}`
  *
  * - return: `none`
  */
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createLines(
    @Body() body: {}
  ): any {
    return this.articlesModel.createArticles(body)
  }
}