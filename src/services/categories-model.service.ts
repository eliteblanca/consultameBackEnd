import { Injectable, Optional, NotAcceptableException, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { help } from "../helpers/helper";
import { CategoriesIndex, category } from "../indices/categoriesIndex";
import { SublinesIndex } from "../indices/sublinesIndex";
import { ArticleIndex } from "../indices/articleIndex";
import { Length, IsNotEmpty, IsPositive, IsInt, IsOptional, IsString } from 'class-validator';
import { ArticlesModelService } from "./articles-model.service";
import * as R from 'remeda';
import * as async from 'async';

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
export class CategoriesModelService {
  constructor(
    private categoriesIndex: CategoriesIndex,
    private sublinesIndex: SublinesIndex,
    private articleIndex: ArticleIndex,
    @Inject(forwardRef(() => ArticlesModelService))
    private articlesModel: ArticlesModelService
  ) { }

  public async isLeaftCategory(categoryId: string): Promise<boolean> {
    try {
      let result = await this.categoriesIndex.where({ group: categoryId })

      if (result.length) {
        return false
      } else {
        return true
      }

    } catch (error) {
      console.log(error)
    }
  }

  public async getCategory(categoryId: string): Promise<category & { id: string; }> {
    return await this.categoriesIndex.getById(categoryId)
  }

  public async createCategory(newCategory: newCategoryDTO, sublineId: string): Promise<category & { id: string; }> {
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

    let result = await this.categoriesIndex.create(category)

    return R.addProp(category, 'id', result.id)

  }

  public async getCategories(sublineId: string): Promise<(category & { id: string; })[]> {

    try {

      let subline = await this.sublinesIndex.getById(sublineId);

      return await this.categoriesIndex.where({ sublinea: sublineId })

    } catch (error) {
      if (error && error.meta && error.meta.body && error.meta.statusCode == 404) {
        throw new NotFoundException('sublinea no encontrada')
      } else {
        console.log(error)
      }
    }
  }

  private async getCategoriesByGroup(categoryId): Promise<(category & { id: string; })[]> {
    return await this.categoriesIndex.where({ group: categoryId })
  }

  private async getTree(groupId): Promise<string[]> {

    let isLeaftCategory = await this.isLeaftCategory(groupId)

    if (isLeaftCategory) {
      return [groupId]
    } else {
      let nodes = await this.getCategoriesByGroup(groupId)
      let result = [groupId]
      for (var i = 0; i < nodes.length; i++) {
        let newNodes = await this.getTree(nodes[i].id)
        result = result.concat(newNodes)
      }
      return result
    }
  }

  public deleteCategory = async (categoryId): Promise<any> => {

    let listOfCategories = await this.getTree(categoryId);

    let articulosPorBorrar: any[] = await async.map(listOfCategories, async (catId) => this.articleIndex.where({ category: catId }))

    let result = await async.each(R.flatten(articulosPorBorrar).map(article => article.id), this.articlesModel.deleteArticle);

    let deleteCategoriesQuery = {
      "query": {
        "bool": {
          "filter": {
            "terms": {
              "_id": listOfCategories
            }
          }
        }
      }
    }

    return await this.categoriesIndex.deleteByQuery(deleteCategoriesQuery)
  }
}