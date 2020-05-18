import { Injectable } from '@nestjs/common';
import { UsersesionsIndex, sesion } from "../indices/usersesionsIndex";

export class sesionDTO {
    login:string
    logout:string    
    pcrc:string
}

export class updateSesionDTO {
    logout:string    
}

@Injectable()
export class UsersesionsModelService {
    constructor(
        private usersesionsIndex:UsersesionsIndex
    ){  }

    postUserSesion = async (userid, sesionData:sesionDTO) => {
        return await this.usersesionsIndex.create({ 
            userid: userid, 
            login: parseInt(sesionData.login),
            logout: parseInt(sesionData.logout),
            pcrc:sesionData.pcrc
        })
    }

    udpateUserSesion = async(id:string ,sesionData:updateSesionDTO) => {
        return this.usersesionsIndex.updatePartialDocument(id, { logout: parseInt(sesionData.logout) })
    }

    getUserSesions = async (userId:string, pcrc:string, from: string = '0', size: string = '10') => {
        return await this.usersesionsIndex.where({ userid: userId, pcrc: pcrc }, from, size, { orderby: 'logout', order: 'desc' });
    }

}