import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface user {
    username: string,
    password: string,
    rol: string
}

export interface userWithoutPassword {
    username: string,
    rol: string
}

@Injectable()
export class UserIndex extends Esindex<user> {
    constructor() {
        super('users')
    }
}