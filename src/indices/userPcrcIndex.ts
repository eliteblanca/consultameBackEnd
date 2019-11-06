import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class userPcrc {
    cedula:string;
    pcrc:string;
}

@Injectable()
export class UserPcrcIndex extends Esindex<userPcrc> {
    constructor(){
        super('userpcrc')
    }

}