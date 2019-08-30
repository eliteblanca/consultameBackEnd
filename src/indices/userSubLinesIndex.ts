import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface userSubLine {
    user:string,
    subline:string
  }

@Injectable()
export class UserSubLinesIndex extends Esindex<userSubLine> {
    constructor(){
        super('usersublines')
    }
}