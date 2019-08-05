import { Injectable } from '@nestjs/common';
import { DiccionarioEjemplo } from "../diccionario-ejemplo";
import { Article } from 'src/entities/article';
import { Client, ClientOptions, ApiResponse } from "@elastic/elasticsearch";

type categories = {
    name:string,
    order:number,
    desplegado:boolean,
    subcategories?:categories
}[];

type category = {
  name:string,
  order:number,
  desplegado:boolean,
  subcategories?:categories
};

const PUNTO_DE_ENLACE:string = "https://search-multiconsulta-focy72himmej26z3i6sqv56pp4.us-west-1.es.amazonaws.com";

@Injectable()
export class ModelService { 

    private readonly esClient: Client;

    private  suggestionList: string[] = [
      'prueba 1',
      'prueba 2',
      'prueba 3',
      'prueba 4',
      'prueba 5'];

    constructor(){
        this.esClient = new Client({
            node:PUNTO_DE_ENLACE,
            requestTimeout:3000
        })
    }

    private indexDocument<T>(doc:T,index:string){
      return this.esClient.index({
        index: index,
        refresh: 'true',
        body: doc
      })
    }

    private indexDocuments<T>(docs:T[],index:string){

      let bulk:any[] = [];

      docs.forEach(doc => {
        bulk.push({ index: {_index: index.toLowerCase(), _type: '_doc'} });
        bulk.push(doc);
      });

      return this.esClient.bulk({
        index: index.toLowerCase(),
        refresh: 'true',
        body: bulk
      }).catch(err=>{
        console.log(err.meta.body.error)
      })

    }

    private parseEsResultToArticles(result:ApiResponse<any, any>):Article[]{
      return result.body.hits.hits.map(articleSouce=>{
        return <Article>articleSouce._source
      })
    }

    private async getArticlesByCategory(options: {category?: category; line: string; subLine: string; }):Promise<Article[]>{
      try{
        let result = await this.esClient.search({
          index:"articles",
          body:{
            query:{
              bool:{
                must: [
                  {
                    multi_match : {
                      "query" : options.category,
                      "fields" : [ "title^3", "content^2" , "tags"]
                    }
                  }
                ],
                filter: [
                  { "term":  { "line": options.line }},
                  { "term":  { "subLine": options.subLine }}
                ]
              }
            }
          }
        })

        return this.parseEsResultToArticles(result);
      }catch(err){        
        console.log(err.meta.body.error);
      }
    }

    private async getArticlesByQuery(options: {query?: string; line: string; subLine: string; }):Promise<Article[]>{
      try{
        let result = await this.esClient.search({
          index:"articles",
          body:{
            query:{
              bool:{
                must: [
                  {
                    multi_match : {
                      "query" : options.query,
                      "fields" : [ "title^3", "content^2" , "tags"]
                    }
                  }
                ],
                filter: [
                  { "term":  { "line": options.line }},
                  { "term":  { "subLine": options.subLine }}
                ]
              }
            }
          }
        })

        return this.parseEsResultToArticles(result);
      }catch(err){        
        console.log(err.meta.body.error)
      }
    }

    public DDBB_status = ()=>{
      return this.esClient.ping()
    }

    public async getArticles(options: { query?: string; category?: category; line: string; subLine: string; }):Promise<Article[]>{
      if(options.query){
        let {category, ...ops} = options;
        return this.getArticlesByQuery(ops);
      }else{
        let {query, ...ops} = options;
        return this.getArticlesByCategory(ops);
      }
    }
    
    public getArticle(articleId:string):Article{
        let diccionario = new DiccionarioEjemplo();
        return diccionario.diccionarioArticles[0];
    }

    public getSuggestions(input:string, line:string, subline:string):String[]{
        return this.suggestionList;
    }

    public createArticles(articles:Article[]):any{
      return this.indexDocuments<Article>(articles,'articles')
    }

    public userLines(id_usuario:string):string[]{
        return ["Bancolombia", "Sura", "DirecTV"]
    }

    public userSubLines(id_usuario:string, id_linea:string):{name:string, sublines:string[]}{
        let subLines = [];      

        switch (id_linea) {
          case 'Bancolombia':
            subLines = ["Atencion al cliente", "Ventas", "Soporte"]
            break;      
          case 'Sura':
            subLines = ["Citas", "Urgencias"]
            break;      
          case 'DirecTV':
            subLines = ["Soporte", "SAC"]
            break;      
          default:          
              subLines = ["Atencion al cliente", "Ventas", "Soporte"]
            break;
        }

        return {name:id_linea, sublines:subLines}
    }

    public categories(id_line, id_subline):categories{

        let intPrueba = (Math.random() * 100).toPrecision(1)

        let categories:categories = [
            {
              name:`categoria ${intPrueba}`,
              order:1,
              desplegado:true,
              subcategories:[{
                  name:"sub Categoria 1",
                  order:1,
                  desplegado:true
                },{
                  name:"sub Categoria 2",
                  order:1,
                  desplegado:true
                }
              ]
            },{
              name:"categoria 2",
              order:1,
              desplegado:true,
              subcategories:[{
                  name:"sub Categoria 1",
                  order:1,
                  desplegado:true
                },{
                  name:"sub Categoria 2",
                  order:1,
                  desplegado:true
                }
              ]
            },{
              name:"categoria 3",
              order:1,
              desplegado:true,
              subcategories:[{
                  name:"sub Categoria 1",
                  order:1,
                  desplegado:true,
                  subcategories:[{
                    name:"sub Categoria 1",
                    order:1,
                    desplegado:true,
                    subcategories:[{
                      name:"sub Categoria 1",
                      order:1,
                      desplegado:true
                    },{
                      name:"sub Categoria 2",
                      order:1,
                      desplegado:true
                    }
                  ]
                  },{
                    name:"sub Categoria 2",
                    order:1,
                    desplegado:true
                  }
                ]
                },{
                  name:"sub Categoria 2",
                  order:1,
                  desplegado:true
                }
              ]
            },
          ];
    
        return categories;
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
}