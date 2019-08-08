import { Injectable } from '@nestjs/common';
import { Client, ClientOptions, ApiResponse } from "@elastic/elasticsearch";
import { GenericModel } from "../services/generic-model";


@Injectable()
export class EsClientService extends GenericModel{

    constructor(){
        super()
    }

    public async createIndex(index:string):Promise<ApiResponse>{
        try {
            switch (index) {
                case 'articles':                               
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body:{   
                            "mappings" : {
                                "properties" : {
                                    "title"           : { "type": "text" },
                                    "content"         : { "type": "text" },
                                    "tags"            : { "type": "keyword" },
                                    "resume"          : { "type": "text" },
                                    "attached"        : { "type": "keyword" },
                                    "likes"           : { "type": "keyword" },
                                    "disLikes"        : { "type": "keyword" },
                                    "favorites"       : { "type": "keyword" },
                                    "role"            : { "type": "keyword" },
                                    "publicationDate" : { "type": "date", "format":'epoch_millis' },
                                    "modificationDate": { "type": "date", "format":'epoch_millis' },
                                    "modificationUser": { "type": "keyword" },
                                    "creator"         : { "type": "keyword" },
                                    "commentsList"    : { "type": "keyword" },
                                    "line"            : { "type": "keyword" },
                                    "subLine"         : { "type": "keyword" },
                                    "category"        : { "type": "keyword" }
                                }
                            }
                        }
                    })
                break;
                case 'searchs':                               
                    return await this.esClient.indices.create({
                    index: index,
                    include_type_name: false,
                    body:{
                        "mappings" : {
                            "properties" : {
                                "line"            : { "type": "keyword" },
                                "subline"         : { "type": "keyword" },
                                "query"           : { "type": "keyword" },
                                "searches"        : { "type": "integer" },
                            }
                        }
                    }
                    })
                break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err.meta.body.error)
        }
    }

    public async deleteIndex(index:string):Promise<any>{
        try {
          return await this.esClient.indices.delete({  index: index  })
        } catch (err) {
          console.log(err.meta.body.error)
        }
    }

    public DDBB_status = ()=>{
        return this.esClient.ping()
    }
}