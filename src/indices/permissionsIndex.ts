import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface permission {
    role:string,
    resource:string,
    action:string,
    attributes:string
  }

@Injectable()
export class PermissionsIndex extends Esindex<permission> {
    constructor(){
        super('permissions')
    }
}