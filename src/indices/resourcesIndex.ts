import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface resource {
    resource:string
  }

@Injectable()
export class ResourcesIndex extends Esindex<resource> {
    constructor(){
        super('resources')
    }
}