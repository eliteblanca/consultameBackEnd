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
									"content": { "type": "text" },
									"tags": { "type": "keyword" },
									"resume": { "type": "text" },
									"attached": { "type": "keyword" },
									"likes": { "type": "keyword" },
									"disLikes": { "type": "keyword" },
									"favorites": { "type": "keyword" },
									"role": { "type": "keyword" },
									"publicationDate": { "type": "date", "format": 'epoch_millis' },
									"modificationDate": { "type": "date", "format": 'epoch_millis' },
									"modificationUser": { "type": "keyword" },
									"creator": { "type": "keyword" },
									"commentsList": { "type": "keyword" },
									"line": { "type": "keyword" },
									"subLine": { "type": "keyword" },
									"category": { "type": "keyword" }
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
							// "mappings" : {
							//     "properties" : {
							//         "subline"  : { "type": "keyword" },
							//         "query"    : { 
							//             "type": "search_as_you_type",
							//             "fields": {
							//                 "raw": {
							//                     "type": "keyword"
							//                 }
							//             }
							//         },


							//         "searches" : { "type": "integer" }
							//     }
							// }
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
									line:{	type:"keyword"	},
									subline:{	type:"keyword"	},
									searches:{	type:"integer"	}
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
									"username": { "type": "keyword" },
									"password": { "type": "keyword" },
									"rol": { "type": "keyword" },
									"subLines": { "type": "keyword" }
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

