import { Injectable } from '@nestjs/common';
import { ApiResponse } from "@elastic/elasticsearch";
import { GenericModel } from "../services/generic-model";
import * as R from 'remeda';

@Injectable()
export class EsClientService extends GenericModel {

    constructor() {
        super()
    }

    public async createIndex(index: string): Promise<ApiResponse> {
        try {
            switch (index) {
                case 'articles':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "title": { "type": "text" },
                                    "content": { "type": "text", "analyzer": "spanish" },
                                    "obj": { "type": "keyword", "ignore_above": 250 },
                                    "tags": { "type": "keyword" },
                                    "resume": { "type": "text" },
                                    "attached": { "type": "keyword" },
                                    "likes": { "type": "keyword" },
                                    "disLikes": { "type": "keyword" },
                                    "favorites": { "type": "keyword" },
                                    "state": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationUser": { "type": "keyword" },
                                    "creator": { "type": "keyword" },
                                    "commentsList": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "category": { "type": "keyword" },
                                    "views": { "type": "integer" },
                                    "type": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'news':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "title": { "type": "text" },
                                    "content": { "type": "text", "analyzer": "spanish" },
                                    "obj": { "type": "keyword", "ignore_above": 250 },
                                    "attached": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationUser": { "type": "keyword" },
                                    "creator": { "type": "keyword" },
                                    "commentsList": { "type": "keyword" },
                                    "subline": { "type": "keyword" },
                                    "state": { "type": "keyword" },
                                    "views": { "type": "integer" }
                                }
                            }
                        }
                    })
                    break;
                case 'searchs':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            mappings: {
                                properties: {
                                    query: {
                                        type: "completion",
                                        contexts: [
                                            {
                                                name: "subline",
                                                type: "category",
                                                path: "subline"
                                            }
                                        ]
                                    },
                                    didyoumean: { type: "text" },
                                    subline: { type: "keyword" },
                                    user: { type: "keyword" },
                                    publicationDate: { "type": "date", "format": 'epoch_millis' },
                                }
                            }
                        }
                    })
                    break;
                case 'users':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "cedula": { "type": "keyword" },
                                    "nombre": { "type": "keyword" },
                                    "rol": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'categories':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "name": { "type": "keyword" },
                                    "group": { "type": "keyword" },
                                    "sublinea": { "type": "keyword" },
                                    "position": { "type": "integer" },
                                    "icon": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'userlike':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "user": { "type": "keyword" },
                                    "article": { "type": "keyword" },
                                    "type": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'userfavorites':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "user": { "type": "keyword" },
                                    "article": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'userpcrc':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "cedula": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'comments':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "articulo": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "user": { "type": "keyword" },
                                    "username": { "type": "keyword" },
                                    "replyTo": { "type": "keyword" },
                                    "text": { "type": "keyword" },
                                    "director": { "type": "keyword" },
                                    "gerente": { "type": "keyword" },
                                    "coordinador": { "type": "keyword" },
                                    "lider": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                }
                            }
                        }
                    })
                    break;
                case 'articlesevents':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "articulo": { "type": "keyword" },
                                    "userId": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationUser": { "type": "keyword" },
                                    "creator": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                    "eventDate": { "type": "date", "format": 'epoch_millis' },
                                    "director": { "type": "keyword" },
                                    "gerente": { "type": "keyword" },
                                    "coordinador": { "type": "keyword" },
                                    "lider": { "type": "keyword" },
                                    "event": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'articlestates':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "articulo": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                    "state": { "type": "keyword" },
                                    "initialDate": { "type": "date", "format": 'epoch_millis' },
                                    "finalDate": { "type": "date", "format": 'epoch_millis' },
                                    "initialDateUser": { "type": "keyword" },
                                    "finalDateUser": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'favoritestates':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "initialDate": { "type": "date", "format": 'epoch_millis' },
                                    "finalDate": { "type": "date", "format": 'epoch_millis' },
                                    "articulo": { "type": "keyword" },
                                    "user": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                    "director": { "type": "keyword" },
                                    "gerente": { "type": "keyword" },
                                    "coordinador": { "type": "keyword" },
                                    "lider": { "type": "keyword" },
                                    "state": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'views':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "initialDate": { "type": "date", "format": 'epoch_millis' },
                                    "finalDate": { "type": "date", "format": 'epoch_millis' },
                                    "articulo": { "type": "keyword" },
                                    "duration": { "type": "integer" },
                                    "user": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                    "director": { "type": "keyword" },
                                    "gerente": { "type": "keyword" },
                                    "coordinador": { "type": "keyword" },
                                    "lider": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'articlechanges':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "eventDate": { "type": "date", "format": 'epoch_millis' },
                                    "articulo": { "type": "keyword" },
                                    "user": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "categoria": { "type": "keyword" },
                                    "event": { "type": "keyword" },
                                    "articlecontent": { "type": "keyword", "ignore_above": 250 },
                                    "prevstate": { "type": "keyword" },
                                    "articlestate": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'userjwt':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "user": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'notifications':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "event": { "type": "keyword" },
                                    "date": { "type": "date", "format": 'epoch_millis' },
                                    "room": { "type": "keyword" },
                                    "data": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'usersesions':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "login": { "type": "date", "format": 'epoch_millis' },
                                    "logout": { "type": "date", "format": 'epoch_millis' },
                                    "userid": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'usernotifications':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "event": { "type": "keyword" },
                                    "date": { "type": "date", "format": 'epoch_millis' },
                                    "room": { "type": "keyword" },
                                    "data": { "type": "keyword" },
                                    "userid": { "type": "keyword" },
                                    "notificationId": { "type": "keyword" },
                                }
                            }
                        }
                    })
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    }

    public async addFieldToIndex(index: string, fieldName: string, fieldType: 'text' | 'keyword' | 'integer'): Promise<ApiResponse> {
        return await this.esClient.indices.putMapping({
            index: index,
            body: {
                "properties": R.objOf({ "type": fieldType }, fieldName)
            }
        })
    }

    public async deleteIndex(index: string): Promise<any> {
        try {
            return await this.esClient.indices.delete({ index: index })
        } catch (err) {
            console.log(err)
        }
    }

    public DDBB_status = () => {
        return this.esClient.ping()
    }
}