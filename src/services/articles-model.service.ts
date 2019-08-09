import { Injectable } from '@nestjs/common';
import { DiccionarioEjemplo } from "../diccionario-ejemplo";
import { Article } from '../entities/article';
import { SearchModelService } from "../services/search-model.service";
import { GenericModel } from "../services/generic-model";
import { ApiResponse } from '@elastic/elasticsearch';

export class postArticlesDTO extends Article{    
    public subLine:string;
    public line:string;

    constructor(config:postArticlesDTO){
        let {subLine, line, ...articleData } = config;
        super(articleData);
        Object.assign(this, config)
    }
}

@Injectable()
export class ArticlesModelService extends GenericModel{

    constructor(private searchModel:SearchModelService) {
        super()
    }

//#region Private

    private parseEsResultToArticles(result: ApiResponse<any, any>): Article[] {
        return result.body.hits.hits.map(articleSource => {
            let articleAux = articleSource._source;
            articleAux.id = articleSource['_id'];
            return articleAux;
        })
    }
   
//#endregion Private

//#region Public

    public async getArticlesByCategory(category: string): Promise<Article[]> {
        try {
            let result = await this.esClient.search({
                index: "articles",
                body: {
                    query: {
                        bool: {
                            filter: [
                                { term: { category: category } }
                            ]
                        }
                    }
                }
            })

            return this.parseEsResultToArticles(result);
        } catch (err) {
            console.log(err.meta.body.error);
        }
    }

    public async getArticlesByQuery(options: { query: string; line: string; subline: string; }): Promise<Article[]> {
        try {
            let result = await this.esClient.search({
                index: "articles",
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        "query": options.query,
                                        "fields": ["title^3", "content^2", "tags"]
                                    }
                                }
                            ],
                            filter: [
                                { "term": { "line": options.line } },
                                { "term": { "subLine": options.subline } }
                            ]
                        }
                    }
                }
            })

            return this.parseEsResultToArticles(result);
        } catch (err) {
            console.log(err)
        }
    }

    public async getArticle(articleId: string): Promise<Article> {

        let result = await this.esClient.get({
                id: articleId,
                index: 'articles',
                type: '_doc'
            })
        
        let obj = result.body._source;
        obj.id = result.body._id;
        
        return obj;
    }

    public createArticles(articles: postArticlesDTO[]): any {
        return this.indexDocuments<postArticlesDTO>(articles, 'articles')
    }

    public addLike(idArticulo:string,id_usuario:string):string[]{
        return ['id1' ,'id2'];
    }

    public addDisLike(idArticulo:string,id_usuario:string):string[]{
        return ['id1' ,'id2'];
    }

    public removeDisLike(idArticulo:string, id_usuario:string):string[]{
        return ['id1'];
    }

    public removeLike(idArticulo:string, id_usuario:string):string[]{
        return ['id1'];
    }

//#endregion Public

}