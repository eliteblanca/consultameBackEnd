import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class category {
    sublinea: string;
    name: string;
    position: number;
    icon: string;
    group: string;
}

@Injectable()
export class CategoriesIndex extends Esindex<category> {
    constructor(){
        super('sublines')
    }

}