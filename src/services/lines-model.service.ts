import { Injectable, ConflictException, HttpException, NotFoundException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { CategoriesModelService } from "../services/categories-model.service";
import { LinesIndex, line } from "../indices/linesIndex";
import { SublinesIndex, subline } from "../indices/sublinesIndex";
import { ArticleIndex, Article } from "../indices/articleIndex";
import { CategoriesIndex } from "../indices/categoriesIndex";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, MaxLength, IsIn, IsEmpty, IsOptional, Equals, IsString, IsAlphanumeric } from "class-validator";
import * as async from 'async';
import * as R from 'remeda';

export class newLineDTO {
    @IsNotEmpty({ message: "debes proporcionar un nombre para la nueva linea" })
    @IsString({ message: "debes proporcionar un string como nombre para la linea" })
    @IsAscii({ message: "el nombre de la linea debe contener caracteres Ascii" })
    @MinLength(3, { message: "has proporcionado un nombre demasiado corto, debe contener minimo $constraint1 caracteres" })
    @MaxLength(150, { message: "has proporcionado un nombre demasiado largo, debe contener maximo $constraint1 caracteres" })
    name: string
}

interface line_with_sublines extends line {
    sublines: {
        name: string,
        id: string
    }[]
}

export class newSublineDTO {
    @IsNotEmpty({ message: "debes proporcionar un nombre para la nueva sublinea" })
    @IsString({ message: "debes proporcionar un string como nombre para la sublinea" })
    @IsAscii({ message: "el nombre de la sublinea debe contener caracteres Ascii" })
    @MinLength(3, { message: "has proporcionado un nombre demasiado corto, debe contener minimo $constraint1 caracteres" })
    @MaxLength(150, { message: "has proporcionado un nombre demasiado largo, debe contener maximo $constraint1 caracteres" })
    name: string;
}

export class GetLinesDTO {
    @IsOptional()
    @Equals('subline', { message: "El parametro include debe ser igual a 'subline'" })
    public include?: string
}

export class GetSublinesDTO {
    @IsByteLength(0, 512, { message: "has proporcionado un id invalido" })
    public lineId: string
}

@Injectable()
export class LinesModelService extends GenericModel {


    constructor(
        private linesIndex: LinesIndex,
        private sublinesIndex: SublinesIndex,
        private articleIndex: ArticleIndex,
        private categoriesIndex: CategoriesIndex,
        private categoriesModel:CategoriesModelService
    ) {
        super()
    }

    private populateWithSublines = async (line: line & { id: string; }): Promise<line_with_sublines> => {
        try {
            let sublines = await this.sublinesIndex.where({ line: line.id })
            return R.addProp(line, 'sublines', sublines)
        } catch (error) {
            console.log(error)
        }
    }

    private async getLinesWithSubline(): Promise<line_with_sublines[]> {
        try {

            let lines = await this.linesIndex.all();

            let result: line_with_sublines[] = await async.map(lines, this.populateWithSublines);

            return result;

        } catch (error) {
            console.log(error)
        }
    }

    public async getSubline(sublineId: string): Promise<subline & { id: string; }> {
        return await this.sublinesIndex.getById(sublineId)
    }

    public async getSublines(lineId: string): Promise<(subline & { id: string; })[]> {
        try {
            return await this.sublinesIndex.where({ line: lineId })

        } catch (error) {
            console.log(error)
        }
    }

    public async getLines(include?: string): Promise<line_with_sublines[] | line[]> {
        if (include) {
            return this.getLinesWithSubline()
        } else {
            return this.linesIndex.all()
        }
    }

    public async createLine(line: newLineDTO): Promise<any> {
        let existingLines = await this.linesIndex.where({ name: line.name })

        if (existingLines.length == 0) {
            return await this.linesIndex.create(line)
        } else {
            throw new ConflictException('ya existe una linea con este nombre');
        }
    }

    public async deleteLine(lineId: string): Promise<any> {

        try {
            let sublines = await this.getSublines(lineId)

            let result = await async.each(sublines.map(subline=>subline.id), this.deleteSubLine )

            await this.linesIndex.delete(lineId)

            return true
        } catch (error) {
            if(error && error.meta && error.meta.body && error.meta.statusCode == 404){
                throw new NotFoundException('linea no encontrada')
            }else{
                console.log(error.meta.body)
            }
        }
    }

    public async deleteSubLine(sublineId: string):Promise<any>{
        let categoriesToDelete = await this.categoriesModel.getCategories(sublineId)
        
        let idsCategoriesToDelete = categoriesToDelete
                                    .filter(category => typeof(category.group) == 'undefined' )
                                    .map(category=>category.id)

        let result = await async.each(idsCategoriesToDelete, this.categoriesModel.deleteCategory);

        try {
            await this.sublinesIndex.delete(sublineId)
        } catch (error) {
            if (error && error.meta && error.meta.body && error.meta.statusCode == 404) {
                throw new NotFoundException('sublinea no encontrada')
            } else {
                console.log(error)
            }
        }

        return result

    }

    public async createSubline(subline: newSublineDTO, lineId: string): Promise<any> {

        let existingLine = await this.linesIndex.getById(lineId)

        if (existingLine) {

            let existingSublines = await this.sublinesIndex.where({ line: lineId })

            let existing = R.find(existingSublines, (existingSubline: subline) => existingSubline.name == subline.name)

            if (existing) {
                throw new ConflictException('ya existe una sublinea con este nombre')
            } else {
                return await this.sublinesIndex.create(R.addProp(subline, 'line', lineId))
            }
        } else {
            throw new NotFoundException('no existe la linea')
        }
    }
}