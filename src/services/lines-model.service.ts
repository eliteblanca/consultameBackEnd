import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";

export type lineDTO = {
    name:string
}

export type sublineDTO = {
    name:string
}

type subLine = {
    name : string,
    line : string
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

    public async getLine(lineId: string): Promise<lineDTO> {

        let result = await this.esClient.get({
                id: lineId,
                index: 'lines',
                type: '_doc'
            })
        
        let obj = result.body._source;
        obj.id = result.body._id;
        
        return obj;
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

    public async createLine(line:lineDTO):Promise<any>{

        try {
            let existingLines = await this.getLinesByName(line.name)
    
            console.log(existingLines)

            if(!existingLines.some(x=>x.name == line.name)){
                return this.indexDocuments<lineDTO>([line],'lines');
            }else{
                return 'error';
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async createSubline(subline:sublineDTO, line:string):Promise<any>{
        try {
            let existingLines = await this.getLinesByName(line);
            if(existingLines){
                let existingSublines = await this.getSublinesByName(subline.name, line)    

                if(!existingSublines.some(x=>x.name == subline.name)){
                    return this.indexDocuments<subLine>([{ name : subline.name, line : line }], 'sublines');
                }else{
                    return 'error';
                }
            }else{
                return 'no existe la linea'
            }

        } catch (error) {
            console.log(error)
        }
    }
}