import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Pool, RowDataPacket } from "mysql2/promise";

@Injectable()
export class DbService {

    constructor(@Inject('NIK_DB') private nikDb:Pool){}

    public NIK = async (sql:string, values?:string[]) => {
        try {
            var result = values ? await this.nikDb.query<RowDataPacket[]>(sql,values)  : await this.nikDb.query<RowDataPacket[]>(sql) 


            if(result[0][0]){
                return JSON.parse(JSON.stringify(result[0][0]))            
            } else {
                return []
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
