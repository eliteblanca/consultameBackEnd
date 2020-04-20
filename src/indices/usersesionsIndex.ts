import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export class sesion {
    login:number
    logout:number
    userid:string
    pcrc:string
}

@Injectable()
export class UsersesionsIndex extends Esindex<sesion> {
    constructor(){
        super('usersesions')
    }
}