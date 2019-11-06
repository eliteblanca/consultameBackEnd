import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface user {
    rol: 'admin' | 'user' | 'publicador'
}

@Injectable()
export class UserIndex extends Esindex<user> {
    constructor() {
        super('users')
    }
}