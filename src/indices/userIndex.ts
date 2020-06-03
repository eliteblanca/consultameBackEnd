import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface user {
    cedula:string;
    nombre:string;    
}

@Injectable()
export class UserIndex extends Esindex<user> {
    constructor() {
        super('users')
    }
}