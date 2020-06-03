import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Pool, RowDataPacket } from "mysql2/promise";

@Injectable()
export class DbService {

    constructor(@Inject('NIK_DB') private nikDb:Pool){}

    public NIK = async (sql:string, values?:string[]) => {
        try {
            if(values){
                return await this.nikDb.execute(sql,values)  
            } else {
                return await this.nikDb.execute(sql)  
            }


        } catch(err) {
            console.log(err)
            throw new HttpException({
                "error": `error code: DBerror`,
                "message": "internal_server_error"
            }, 500)
        }
    }

}
