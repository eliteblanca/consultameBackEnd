import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class favoritestate {
    initialDate:number;
    finalDate:number;
    articulo:string;
    user:string;
    cliente:string;
    pcrc:string;
    categoria:string;
    director:string;
    gerente:string;
    coordinador:string;
    lider:string;
    state:string;
}

@Injectable()
export class FavoriteStatesIndex extends Esindex<favoritestate> {
    constructor(){
        super('favoritestates')
    }
}