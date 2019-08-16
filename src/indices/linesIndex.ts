import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface line {    
    name:string;
}

@Injectable()
export class LinesIndex extends Esindex<line> {
    constructor(){
        super('lines')
    }

}