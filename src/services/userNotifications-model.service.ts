import { Injectable } from '@nestjs/common';
import { NotificationsIndex } from "../indices/notificationsIndex";
import { UsernotificationsIndex, usernotification } from "../indices/userNotificationsIndex";
import * as R from 'remeda';

export class userNotificationDTO {
    event:string
    room:string
    data:string
    notificationId:string
    date:string
}

@Injectable()
export class UserNotificationsModelService {

    constructor(
        private usernotificationsIndex:UsernotificationsIndex,
    ){  }

    postUserNotification = async (data:userNotificationDTO, userId:string) => {
        return await this.usernotificationsIndex.create({
            data:data.data,
            date:parseInt(data.date),
            event:data.event,
            notificationId:data.notificationId,
            room:data.room,
            userid:userId
        })
    }

    getUserNotifications = async (userId:string, room:string) => {
        let result = await Promise.all([
            this.usernotificationsIndex.where({ userid:userId, room:room }),
            this.usernotificationsIndex.where({ userid:userId, room:room+'/'+userId })
        ])

        return  R.flatten(result)
    }

    deleteUserNotification = async (notificationId, userId) => {
        let result = await this.usernotificationsIndex.deleteWhere({ notificationId: notificationId, userid:userId })
        return result
    }

    deleteAllUserNotification = async (userId:string, room:string) => {

        

        let result = await Promise.all([
            this.usernotificationsIndex.deleteWhere({ room:room, userid:userId }),
            this.usernotificationsIndex.deleteWhere({ room:room+'/'+userId })
        ])

        return result
    }

}