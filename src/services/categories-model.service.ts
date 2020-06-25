import { forwardRef, Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Length, ValidateIf } from 'class-validator';
import { ArticleIndex } from "../indices/articleIndex";
import { CategoriesIndex, category } from "../indices/categoriesIndex";
import { ArticlesModelService } from "./articles-model.service";
import { DbService } from "./db.service"
import { categoryRaw } from "../entities";
import * as async from 'async';
import * as R from 'remeda';

export class getCategoryParams {
    @Length(20, 20, { message: "debes proporcionar un id valido" })
    idCategory: string;
}

export class newCategoryDTO {

    @IsNotEmpty({ message: "Debes proporcionar un nombre para la categoria" })
    @IsString()
    public name: string;

    @IsNotEmpty()
    public position: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public icon: string;

    @ValidateIf(o => !!!o.group)
    @IsNotEmpty()
    @IsString()
    public pcrc: string
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public group: string;
}

export class udpateCategoryDTO {
    @IsNotEmpty({ message: "Debes proporcionar un nombre para la categoria" })
    public name: string;

    @IsPositive({ message: "Debes proporcionar un numero positivo" })
    @IsInt({ message: "Debes proporcionar un numero entero" })
    public position: number;

    @IsOptional()
    @IsString({ message: "Debes proporcionar un nombre valido para el icono" })
    @Length(3, 150, { message: "debes proporcionar un icono valido" })
    public icon: string;
}

@Injectable()
export class CategoriesModelService {
    constructor(
        private db:DbService
        // private categoriesIndex: CategoriesIndex,
        // private articleIndex: ArticleIndex,
        // @Inject(forwardRef(() => ArticlesModelService))
        // private articlesModel: ArticlesModelService
    ) { }

    // private sortBy = (obj, key) => {
    //     return obj.sort(function(a, b) {
    //         var textA = a[key];
    //         var textB = b[key];
    //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    //     })
    // }

    // public async isLeaftCategory(categoryId: string): Promise<boolean> {
    //     try {
    //         let result = await this.categoriesIndex.where({ group: categoryId })

    //         if (result.length) {
    //             return false
    //         } else {
    //             return true
    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // public async getCategory(categoryId: string): Promise<category & { id: string; }> {
    //     return await this.categoriesIndex.getById(categoryId)
    // }

    public async createCategory(newCategory: newCategoryDTO): Promise<any> {
        let result = await this.db.NIK(`CALL crear_categoria(?,?,?,?,?)`,[newCategory.name, newCategory.position, newCategory.icon, newCategory.pcrc, newCategory.group])
        return result
    }
    
    public async getCategories(baseId: string): Promise<categoryRaw[]> {
        return await this.db.NIK(`CALL get_base_categorias(?)`,[baseId])
    }

    // private async getCategoriesByGroup(categoryId): Promise<(category & { id: string; })[]> {
    //     return await this.categoriesIndex.where({ group: categoryId })
    // }

    // private async getTree(groupId): Promise<string[]> {

    //     let isLeaftCategory = await this.isLeaftCategory(groupId)

    //     if (isLeaftCategory) {
    //         return [groupId]
    //     } else {
    //         let nodes = await this.getCategoriesByGroup(groupId)
    //         let result = [groupId]
    //         for (var i = 0; i < nodes.length; i++) {
    //             let newNodes = await this.getTree(nodes[i].id)
    //             result = result.concat(newNodes)
    //         }
    //         return result
    //     }
    // }

    // public deleteCategory = async (categoryId): Promise<any> => {

    //     let listOfCategories = await this.getTree(categoryId);

    //     let articulosPorBorrar: any[] = await async.map(listOfCategories, async (catId) => this.articleIndex.where({ category: catId }))

    //     let result = await async.each(R.flatten(articulosPorBorrar).map(article => article.id), this.articlesModel.deleteArticle);

    //     let deleteCategoriesQuery = {
    //         "query": {
    //             "bool": {
    //                 "filter": {
    //                     "terms": {
    //                         "_id": listOfCategories
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     return await this.categoriesIndex.deleteByQuery(deleteCategoriesQuery)
    // }

    // public updateCategory = async (id, newCategory: udpateCategoryDTO): Promise<any> => {
    //     return await this.categoriesIndex.updatePartialDocument(id, newCategory)
    // }

    // public getAllCategories = async () => {
    //     return await this.categoriesIndex.all()
    // }
}