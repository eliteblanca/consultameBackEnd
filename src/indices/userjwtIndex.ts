import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";


export class userjwt {
    user:string;
}

@Injectable()
export class userjwtIndex extends Esindex<userjwt> {

    constructor(){
        super('userjwt')
    }

}