import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface rol {
    rol:string
  }

@Injectable()
export class RolesIndex extends Esindex<rol> {
    constructor(){
        super('roles')
    }
}