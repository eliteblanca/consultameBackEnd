import { Injectable } from '@nestjs/common';
import { SearchModelService } from "../services/search-model.service";
import { GenericModel } from "../services/generic-model";
import { ApiResponse } from '@elastic/elasticsearch';
import {MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, ValidateNested, IsOptional, MaxLength, IsIn, MinDate, IsDate, IsEmpty} from "class-validator";

export class getArticlesDTO{

    @ValidateIf(o => !o.category)
    @IsNotEmpty({ message: "si no se proporciona una categoria se debe proporcionar una query" })
    @IsAscii({ message: "la query debe contener carecteres Ascii" })
    @MinLength(3,{ message: "has proporcionado una query demasiado corta, debe contener minimo $constraint1 caracteres" })
    query?:string;
    
    @IsNotEmpty({ message: "debes proporcionar una linea en la cual buscar los articulos" })
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la linea" })
    @IsBase64({ message: "no has proporcionado un id valido para la linea" })
    line:string;

    @IsNotEmpty({ message: "debes proporcionar una sublinea en la cual buscar los articulos" })
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la sublinea" })
    @IsBase64({ message: "no has proporcionado un id valido para la sublinea" })
    subline:string;

    @ValidateIf(o => !o.query)
    @IsNotEmpty({ message: "si no se proporciona una query se debe proporcionar una categoria" })
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la categoria" })
    @IsBase64({ message: "no has proporcionado un id valido para la categoria" })
    category
}

export class SingleArticleDTO {
    @IsNotEmpty({ message: "debes proporcionar un id de articulo" })
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para el articulo" })
    @IsBase64({ message: "no has proporcionado un id valido para el articulo" })
    id:string
}

export interface Article {
    title:string;
    content:string;
    tags?:string[];
    resume?:string;
    attached?:string[];
    likes?:string[];//user ids
    disLikes?:string[];//user ids
    favorites?:string[];//user ids
    role?:"noticia"|"articulo";
    publicationDate?:Date;
    modificationDate?:Date;
    modificationUser?:string;
    creator?:string;
    id?:string;
    category:string;
    subLine:string;
    line:string;
}

export class articleDTO implements Article{

    @IsNotEmpty({ message: "debes proporcionar un nombre al articulo"})
    @IsAscii({ message: "el titulo solo debe contener caracteres Ascii"})
    @MinLength(3,{ message: "has proporcionado un titulo demasiado corto, debe contener minimo $constraint1 caracteres" })
    public title:string;

    @IsNotEmpty({ message: "debes proporcionar un contenido al articulo"})
    @MinLength(3,{ message: "has proporcionado un contenido demasiado corto, debe contener minimo $constraint1 caracteres" })
    public content:string;
        
    @MinLength(3,{ message: "has proporcionado un tag demasiado corto, debe contener minimo $constraint1 caracteres", each: true })
    @MaxLength(150,{ message: "has proporcionado un tag demasiado largo, debe contener maximo $constraint1 caracteres", each: true })
    @IsAscii({ message: "el tag solo debe contener caracteres Ascii", each: true})
    @IsOptional()
    public tags?:string[];

    @MinLength(3,{ message: "has proporcionado un resumen demasiado corto, debe contener minimo $constraint1 caracteres"})
    @IsAscii({ message: "el resumen solo debe contener caracteres Ascii"})
    @IsOptional()
    public resume?:string;

    @MinLength(3,{ message: "has proporcionado un vinculo demasiado corto, debe contener minimo $constraint1 caracteres", each: true})
    @IsOptional()
    public attached?:string[];

    @IsOptional()
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido en la lista de likes" , each: true})
    @IsBase64({ message: "has proporcionado un id invalido en la lista de likes" , each: true})
    public likes?:string[];//user ids

    @IsOptional()
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido en la lista de disLikes" , each: true})
    @IsBase64({ message: "has proporcionado un id invalido en la lista de disLikes" , each: true})
    public disLikes?:string[];//user ids

    @IsOptional()
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido en la lista de favorites" , each: true})
    @IsBase64({ message: "has proporcionado un id invalido en la lista de favorites" , each: true})
    public favorites?:string[];//user ids

    @IsOptional()
    @IsIn(["noticia","articulo"])
    public role?:"noticia"|"articulo";
        
    public publicationDate?:Date;

    public modificationDate?:Date;

    @IsOptional()
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido en el usuario modificador" , each: true})
    @IsBase64({ message: "has proporcionado un id invalido en el usuario modificador" , each: true})
    public modificationUser?:string;
    
    @IsOptional()
    @IsByteLength(0,512,{ message: "has proporcionado un id invalido en el usuario modificador" , each: true})
    @IsBase64({ message: "has proporcionado un id invalido en el usuario modificador" , each: true})
    public creator?:string;

    @IsEmpty({ message: "no debes proporcionar un id para el articulo, este será generado automaticamente"})
    public id?:string;
    
    @IsNotEmpty({ message: "debes proporcionar una categoria"})
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la categoria" })
    @IsBase64({ message: "no has proporcionado un id valido para la categoria" })
    public category:string;

    @IsNotEmpty({ message: "debes proporcionar una sublinea"})
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la sublinea" })
    @IsBase64({ message: "no has proporcionado un id valido para la sublinea" })
    public subLine:string;

    @IsNotEmpty({ message: "debes proporcionar una linea"})
    @IsByteLength(0,512,{ message: "no has proporcionado un id valido para la linea" })
    @IsBase64({ message: "no has proporcionado un id valido para la linea" })
    public line:string;

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

    public async getArticle(articleId: string): Promise<articleDTO> {

        let result = await this.esClient.get({
                id: articleId,
                index: 'articles',
                type: '_doc'
            })
        
        let obj = result.body._source;
        obj.id = result.body._id;
        
        return obj;
    }

    public async createArticle(article:articleDTO):Promise<any>{

        console.log('{article}')
        console.log(article)

        let result = await this.indexDocument<articleDTO>(article,'articles')

        return result;
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