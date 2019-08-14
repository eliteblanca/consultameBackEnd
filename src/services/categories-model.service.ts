import { Injectable, Optional, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, IsOptional, MaxLength, IsIn, MinDate, IsDate, IsEmpty, IsPositive, IsInt, IsString, Length } from "class-validator";
import { LinesModelService } from "../services/lines-model.service";
import { help } from "../helpers/helper";

type categories = {
  name: string,
  order: number,
  desplegado: boolean,
  subcategories?: categories
}[];

export class correctParams {
  @Length(20, 20, { message: "debes proporcionar un id valido" })
  sublineId: string;
}

export class getCategoryParams {
  @Length(20, 20, { message: "debes proporcionar un id valido" })
  idCategory:string;
}

export class newCategoryDTO {

  @IsNotEmpty({ message: "Debes proporcionar un nombre para la categoria" })
  public name: string;

  @IsPositive({ message: "Debes proporcionar un numero positivo" })
  @IsInt({ message: "Debes proporcionar un numero entero" })
  public position: number;

  @IsOptional()
  @IsString({ message: "Debes proporcionar un nombre valido para el icono" })
  @Length(3, 150, { message: "debes proporcionar un icono valido" })
  public icon: string;

  @IsOptional()
  @Length(20, 20, { message: "debes proporcionar un id valido" })
  public group: string;
}

class category {
  id: string;
  sublinea: string;
  name: string;
  position: number;
  icon: string;
}

@Injectable()
export class CategoriesModelService extends GenericModel {
  constructor(private linesModel: LinesModelService) {
    super()
  }

  private  async getCategory(categoryId: string): Promise<category> {
    try {
      let result = await this.esClient.get({
        id: categoryId,
        index: 'categories',
        type: '_doc'
      })

      return help.combine(result.body._source, { id: result.body._id });
    } catch (error) {
      if (error.meta.statusCode == 404) {
        throw new NotFoundException('articulo no encontrado');
      }
    }
  }

  public async createCategory(newCategory: newCategoryDTO, sublineId: string): Promise<any> {
    try {

      let subline = await this.linesModel.getSubline(sublineId);

      if (newCategory.group) {
        '>>-<>--> agregar validacion para el grupo <--<>-<<'
      }

      let category = help.combine(newCategory, { sublinea: sublineId })

      let result = await this.indexDocument<newCategoryDTO>(category, 'categories')

      return help.combine(category, { id: result.body._id })

    } catch (error) {
      if (error.meta.statusCode == 404) {
        throw new NotAcceptableException('la sublinea no existe');
      } else {
        console.log(error)
      }
    }
  }

  public async getCategories(sublineId: string): Promise<category[]> {

    try {

      let subline = await this.linesModel.getSubline(sublineId);

      let result = await this.esClient.search({
        index: "categories",
        body: {
          query: {
            bool: {
              filter: [
                { term: { sublinea: sublineId } }
              ]
            }
          }
        }
      })

      return result.body.hits.hits.map(categoriesSource =>
        help.combine(categoriesSource._source, { id: categoriesSource._id })
      )

    } catch (error) {

      if (error.meta.statusCode == 404) {
        throw new NotAcceptableException('la sublinea no existe');
      } else {
        console.log(error)
      }

    }
  }


}