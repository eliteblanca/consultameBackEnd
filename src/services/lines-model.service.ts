import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, MaxLength, IsIn, IsEmpty, IsOptional, Equals, IsString, IsAlphanumeric } from "class-validator";
import { help } from "../helpers/helper";
import * as async from "async";

export type lineDTO = {
    name:string
}

type lineObject = {
    name:string;
    id:string;
    sublines?:{
        name:string,
        id:string
    }[]
}

export class sublineDTO {
    @IsNotEmpty({message:"debes proporcionar un nombre para la nueva sublinea"})
    @IsString({message:"debes proporcionar un string como nombre para la sublinea"})
    @IsAscii({message:"el nombre de la sublinea debe contener caracteres Ascii"})
    @MinLength(3,{ message: "has proporcionado un nombre demasiado corto, debe contener minimo $constraint1 caracteres"})
    @MaxLength(150,{ message: "has proporcionado un nombre demasiado largo, debe contener maximo $constraint1 caracteres"})
    name:string;
}

type subLine = {
    name : string,
    line : string
}

export class GetLinesDTO{
    @IsOptional()
    @Equals('subline',{message:"El parametro include debe ser igual a 'subline'"})
    public include?:string
}

export class GetSublinesDTO{
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido"})
    public lineId:string
}

@Injectable()
export class LinesModelService extends GenericModel{
    
    constructor() {
        super()
    }

    private async getLinesByName(name:string):Promise<lineDTO[]>{

        try {
            let result = await this.esClient.search({
                index: "lines",
                body: {
                    query: {
                        bool: {
                            filter: [
                                { "term": { "name": name } }
                            ]
                        }
                    }
                }
            })
    
            return result.body.hits.hits.map(x=>x._source)

        } catch (error) {
            console.log(error)
        }
    }

    private async getSublinesByName(name:string,line:string):Promise<sublineDTO[]>{

        try {

            let result = await this.esClient.search({
                index: "sublines",
                body: {
                    query: {
                        bool: {
                            filter: [
                                { "term": { "name": name } },
                                { "term": { "line": line } }
                            ]
                        }
                    }
                }
            })

            return result.body.hits.hits.map(x=>x._source)

        } catch (error) {
            console.log(error)
        }
    }

    private async getAllLines():Promise<lineObject[]>{
        try {
            let result = await this.esClient.search({
                index: "lines",
                body: {
                    query: {
                        "match_all": {}
                    }
                }
            })

            return result.body.hits.hits.map(lineSource => { 
                return help.combine(lineSource._source,{id:lineSource._id})
            });           
        } catch (err) {     
            console.log(err)
        }               
    }

    private async populateWithSublines(line:lineObject):Promise<lineObject>{
        let sublines = await this.getSublines(line.id)
    }

    private async getLinesWithSubline():Promise<lineObject[]>{
        try {
            let lines = await this.getAllLines();

            async.map(lines, fs.stat, function(err, results){
            // results is now an array of stats for each file
            });

            await help.asyncForEach(lines, async => {

            })

        } catch (error) {
            
        }
    }

    public async getSublines(lineId:string):Promise<any>{
        try {   
            let result = await this.esClient.search({
                index: "sublines",
                body: {
                    query: {
                        bool: {
                            filter: [
                                { "term": { "line": lineId } }
                            ]
                        }
                    }
                }
            })

            return result.body.hits.hits.map(sublineSource=>{
                return help.combine(sublineSource._source, {id:sublineSource._id} );
            })
    
        } catch (error) {
            console.log(error)
        }
    }

    public async getLine(lineId: string): Promise<lineDTO> {

        let result = await this.esClient.get({
                id: lineId,
                index: 'lines',
                type: '_doc'
            })

        return help.combine(result.body._source,{id:result.body._id});
    }

    public async getLines(include?:string):Promise<any>{
        if(include){
            
        }else{
            return this.getAllLines()
        }
    }

    public async createLine(line:lineDTO):Promise<any>{

        try {
            let existingLines = await this.getLinesByName(line.name)

            if(!existingLines.some(x=>x.name == line.name)){
                let result = await this.indexDocument<lineDTO>(line,'lines')
                return help.combine(line,{id:result.body._id})
            }else{
                throw new ConflictException('ya existe una linea con este nombre');
            }
        } catch (error) {
            if( error  instanceof HttpException ){
                throw error
            }else{
                console.log(error)
            }
        }
    }

    public async createSubline(subline:sublineDTO, lineId:string):Promise<any>{
        try {
            let existingLines = await this.getLine(lineId);

            console.log()

            if(existingLines){
                let existingSublines = await this.getSublinesByName(subline.name, lineId)    

                if(!existingSublines.some(x => x.name == subline.name)){
                    let result = await this.indexDocument<subLine>({ name : subline.name, line : lineId }, 'sublines');
                    return help.combine(subline,{id:result.body._id});
                }else{
                    throw new ConflictException('ya existe una sublinea con este nombre')
                }
            }else{
                return 'no existe la linea'
            }

        } catch (error) {
            if( error  instanceof HttpException ){
                throw error
            }else{
                console.log(error)
            }
        }
    }
}