import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";


export class notification {
    event:string
    date:number
    room:string
    data:string
}

@Injectable()
export class NotificationsIndex extends Esindex<notification> {

    constructor(){
        super('notifications')
    }

}