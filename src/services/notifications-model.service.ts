import { Injectable } from '@nestjs/common';
import { NotificationsIndex, notification } from "../indices/notificationsIndex";
import { json } from 'express';


@Injectable()
export class NotificationsModelService {

    constructor(
        private notificationsIndex:NotificationsIndex
    ){  }

    async registerNotification(notifications:notification): Promise<notification & {id: string;}>{
        return await this.notificationsIndex.create(notifications)
    }

    async getNotificationsByDate(from:number, to:number, room:string){
        let esQuery:any
            esQuery = {
                query: {
                    bool: {
                        filter: [
                            { term: { room: room } },
                            { range: { date: { lt: to } } },
                            { range: { date: { gt: from } } }
                        ]
                    }
                },
                sort: [
                    { date: { order: "desc" } }
                ]
            }            

        return await this.notificationsIndex.query(esQuery)
    }

}