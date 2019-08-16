import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface subline {
    name : string;
    line : string;
}

@Injectable()
export class SublinesIndex extends Esindex<subline> {
    constructor(){
        super('sublines')
    }
}