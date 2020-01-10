import { Injectable } from '@nestjs/common';
import { Client, ClientOptions, ApiResponse } from "@elastic/elasticsearch";
import { GenericModel } from "../services/generic-model";

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
                                    "views": { "type": "integer" }
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
                                        type: "text",
                                        analyzer: "autocomplete",
                                        fields: {
                                            raw: {
                                                "type": "keyword"
                                            }
                                        }
                                    },
                                    subline: { type: "keyword" },
                                    searches: { type: "integer" }
                                }
                            },
                            settings: {
                                number_of_shards: 1,
                                analysis: {
                                    filter: {
                                        autocomplete_filter: {
                                            type: "edge_ngram",
                                            min_gram: 1,
                                            max_gram: 20
                                        }
                                    },
                                    analyzer: {
                                        autocomplete: {
                                            type: "custom",
                                            tokenizer: "standard",
                                            filter: [
                                                "lowercase",
                                                "autocomplete_filter"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    })
                    break;
                case 'lines':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "name": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'sublines':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "name": { "type": "keyword" },
                                    "line": { "type": "keyword" }
                                }
                            }
                        }
                    })
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
                case 'permissions':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "role": { "type": "keyword" },
                                    "resource": { "type": "keyword" },
                                    "action": { "type": "keyword" },
                                    "attributes": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'roles':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "role": { "type": "keyword" }
                                }
                            }
                        }
                    })
                    break;
                case 'resources':
                    return await this.esClient.indices.create({
                        index: index,
                        include_type_name: false,
                        body: {
                            "mappings": {
                                "properties": {
                                    "resource": { "type": "keyword" }
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
                                    "article": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "user": { "type": "keyword" },
                                    "username": { "type": "keyword" },
                                    "replyTo": { "type": "keyword" },
                                    "text": { "type": "keyword" }
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
                                    "articleId": { "type": "keyword" },
                                    "userId": { "type": "keyword" },
                                    "publicationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationDate": { "type": "date", "format": 'epoch_millis' },
                                    "modificationUser": { "type": "keyword" },
                                    "creator": { "type": "keyword" },
                                    "cliente": { "type": "keyword" },
                                    "pcrc": { "type": "keyword" },
                                    "category": { "type": "keyword" },
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

                default:
                    break;
            }
        } catch (err) {
            console.log(err.meta.body.error)
        }
    }

    public async deleteIndex(index: string): Promise<any> {
        try {
            return await this.esClient.indices.delete({ index: index })
        } catch (err) {
            console.log(err.meta.body.error)
        }
    }

    public DDBB_status = () => {
        return this.esClient.ping()
    }
}