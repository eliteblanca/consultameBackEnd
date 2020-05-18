import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";


export class usernotification {
    event:string
    date:number
    room:string
    data:string
    userid:string
    notificationId:string
}

@Injectable()
export class UsernotificationsIndex extends Esindex<usernotification> {

    constructor(){
        super('usernotifications')
    }

}