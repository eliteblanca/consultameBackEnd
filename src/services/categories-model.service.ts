import { Injectable, Optional, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, IsOptional, MaxLength, IsIn, MinDate, IsDate, IsEmpty, IsPositive, IsInt, IsString, Length } from "class-validator";
import { LinesModelService } from "../services/lines-model.service";
import { help } from "../helpers/helper";
import { tsRestType } from '@babel/types';
import { CategoriesIndex, category } from "../indices/categoriesIndex";
import { SublinesIndex } from "../indices/sublinesIndex";

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
  idCategory: string;
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

@Injectable()
export class CategoriesModelService extends GenericModel {
  constructor(
    private sublinesIndex:SublinesIndex,
    private categoriesIndex:CategoriesIndex
  ) {
    super()
  }

  public async isLeaftCategory(categoryId: string): Promise<boolean> {
    try {
      let result = await this.categoriesIndex.where({group:categoryId})      

      if(result.length){
        return true
      }else{
        return false
      }

    } catch (error) {
      console.log(error)
    }
  }

  public async getCategory(categoryId: string): Promise<category & { id: string; }> {

    return await this.categoriesIndex.getById(categoryId)

  }

  public async createCategory(newCategory: newCategoryDTO, sublineId: string): Promise<category> {
    try {
      // --> comprueba si la linea existe
      let subline = await this.sublinesIndex.getById(sublineId)
    } catch (error) {
      if (error.meta.statusCode == 404) {
        throw new NotAcceptableException('la sublinea no existe');
      } else {
        console.log(error)
      }
    }

    try {
      // --> comprueba si la categoria padre existe
      if (newCategory.group) {
        let group = await this.getCategory(newCategory.group)
      }
    } catch (error) {
      if (error.meta.statusCode == 404) {
        throw new NotAcceptableException('la categoria no existe');
      } else {
        console.log(error)
      }
    }


    let category = help.combine(newCategory, { sublinea: sublineId })

    let result = await this.indexDocument<newCategoryDTO>(category, 'categories')

    return help.combine(category, { id: result.body._id })

  }

  public async getCategories(sublineId: string): Promise<(category & { id: string; })[]> {

      let subline = await this.sublinesIndex.getById(sublineId);

      return await this.categoriesIndex.where({sublinea:sublineId})

  }

}