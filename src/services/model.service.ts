import { Injectable } from '@nestjs/common';
import { DiccionarioEjemplo } from "../diccionario-ejemplo";
import { Article } from 'src/entities/article';
import { Client, ClientOptions } from "@elastic/elasticsearch";

type categories = {
    name:string,
    order:number,
    desplegado:boolean,
    subcategories?:categories
  }[];

const PUNTO_DE_ENLACE:string = "https://search-multiconsulta-focy72himmej26z3i6sqv56pp4.us-west-1.es.amazonaws.com";

@Injectable()
export class ModelService { 

    private readonly esClient: Client;

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

    private  suggestionList: string[] = [
        'prueba 1',
        'prueba 2',
        'prueba 3',
        'prueba 4',
        'prueba 5'];

    public DDBB_status = ()=>{
      return this.esClient.ping()
    }

    public async getArticles(options: { query?: string; category?: string; line: string; subLine: string; }):Promise<Article[]>{

      try{
        let result = await this.esClient.search({
          index:"articles",
          body:{
            query:{
              match:{
                line: options.line
              }
            }
          }
        })

        return result.body.hits.hits.map(articleSouce=>{
          return <Article>articleSouce._source
        })
      }catch(err){
        console.log(err.meta.body.error)
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