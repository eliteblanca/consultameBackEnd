import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";
import { RequestParams } from "@elastic/elasticsearch";
import * as R from 'remeda';

export interface Article {
    title:string;
    content:string;
    obj:string;
    tags?:string[];
    resume?:string;
    attached?:string[];
    likes?:string[];
    disLikes?:string[];
    favorites?:string[];
    state:string;
    publicationDate?:number;
    modificationDate?:number;
    modificationUser?:string;
    creator?:string;
    category:string;
    subline:string;
    line:string;
}

@Injectable()
export class ArticleIndex extends Esindex<Article> {
    constructor(){
        super('articles')
    }
     
    public query = async (query: object): Promise<(Article & { id: string, highlight:string  })[]> => {
        
        let queryObj: RequestParams.Search = this.createRequest(query)
        
        let result = await this.esClient.search(queryObj)

        return R.map((x: any) =>{
            return R.addProp(R.addProp(x._source, 'id', x._id),'highlight',x.highlight)
        }) (result.body.hits.hits)
    }
}