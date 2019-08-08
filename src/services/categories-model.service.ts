import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";

type categories = {
    name:string,
    order:number,
    desplegado:boolean,
    subcategories?:categories
}[];

@Injectable()
export class CategoriesModelService extends GenericModel{
    constructor(){
        super()
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

    // public getSublineCategories():Promise<string[]>{
    //   let result = await this.esClient.search({
    //     index: "articles",
    //     body: {
    //       query: {
    //         bool: {
    //           filter: [
    //             { term: { category: category } }
    //           ]
    //         }
    //       }
    //     }
    //   })
    // }

}
