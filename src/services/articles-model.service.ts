import { Injectable, NotFoundException, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { SearchModelService } from "../services/search-model.service";
import { GenericModel } from "../services/generic-model";
import { LinesModelService } from "../services/lines-model.service";
import { CategoriesModelService } from "../services/categories-model.service";
import { ApiResponse } from '@elastic/elasticsearch';
import {MinLength, ValidateIf, IsNotEmpty, IsAscii, IsByteLength, IsBase64, IsOptional, MaxLength, IsIn, Length} from "class-validator";
import { help } from "../helpers/helper";
export class getArticlesDTO{

    @ValidateIf(o => !o.category)
    @IsNotEmpty({ message: "si no se proporciona una categoria se debe proporcionar una query" })
    @IsAscii({ message: "la query debe contener carecteres Ascii" })
    @MinLength(3,{ message: "has proporcionado una query demasiado corta, debe contener minimo $constraint1 caracteres" })
    query?:string;
    
    @IsNotEmpty({ message: "debes proporcionar una linea en la cual buscar los articulos" })
    @Length(20,20,{ message: "debes proporcionar un id valido" })
    line:string;

    @IsNotEmpty({ message: "debes proporcionar una sublinea en la cual buscar los articulos" })
    @Length(20,20,{ message: "debes proporcionar un id valido" })
    subline:string;

    @ValidateIf(o => !o.query)
    @IsNotEmpty({ message: "si no se proporciona una query se debe proporcionar una categoria" })
    @Length(20,20,{ message: "debes proporcionar un id valido" })
    category:string
}

export class SingleArticleDTO {
    @IsNotEmpty({ message: "debes proporcionar un id de articulo" })
    @Length(20,20,{ message: "debes proporcionar un id valido" })
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
    publicationDate?:number;
    modificationDate?:number;
    modificationUser?:string;
    creator?:string;
    id?:string;
    category:string;
    subLine:string;
    line:string;
}

export class articleDTO {

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
    @IsIn(["noticia","articulo"])
    public role?:"noticia"|"articulo";        
    
    @IsNotEmpty({ message: "debes proporcionar una categoria"})
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public category:string;

}
export class articlesBulkDTO implements Article{

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
    @Length(20,20,{ message: "debes proporcionar un id valido" ,each:true})
    public likes?:string[];//user ids

    @IsOptional()
    @Length(20,20,{ message: "debes proporcionar un id valido" ,each:true})
    public disLikes?:string[];//user ids

    @IsOptional()
    @Length(20,20,{ message: "debes proporcionar un id valido" ,each:true})
    public favorites?:string[];//user ids

    @IsOptional()
    @IsIn(["noticia","articulo"])
    public role?:"noticia"|"articulo";
        
    public publicationDate?:number;

    public modificationDate?:number;

    @IsOptional()
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public modificationUser?:string;
    
    @IsOptional()
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public creator?:string;
    
    @IsNotEmpty({ message: "debes proporcionar una categoria"})
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public category:string;

    @IsNotEmpty({ message: "debes proporcionar una sublinea"})
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public subLine:string;

    @IsNotEmpty({ message: "debes proporcionar una linea"})
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public line:string;

}
@Injectable()
export class ArticlesModelService extends GenericModel{

    constructor(
        private searchModel:SearchModelService,
        private linesModel:LinesModelService,
        private categoriesModel:CategoriesModelService) {
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

        try {
            let result = await this.esClient.get({
                id: articleId,
                index: 'articles',
                type: '_doc'
            })        

            return help.combine(result.body._source, {id:result.body._id});
        } catch (error) {
            if( error.meta.statusCode == 404 ){
                throw new NotFoundException('articulo no encontrado');
            }
        }
    }

    public async createArticle(article:articleDTO,creator:string):Promise<any>{

        let subline:string = null;
        let line:string = null;
            try {
                var category = await this.categoriesModel.getCategory(article.category);
            } catch (error) {
                if( error.meta.statusCode == 404 ){
                    throw new NotFoundException('categoria no encontrada');
                }
            }

            try {
                var isLeaft = await this.categoriesModel.isLeaftCategory(article.category);
            } catch (error) {
                console.log(error)
            }

            if(isLeaft){
                subline = category.sublinea;
            }else{
                throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias')
            }

            try {
                let sublineAux = await this.linesModel.getSubline(subline)
                line = sublineAux.line
                
            } catch (error) {
                throw error
                if( error.meta.statusCode == 404 ){
                    throw new NotFoundException('error al guardar el articulo');
                }
            }

            let articleExtas = {
                likes:[],
                disLikes:[],
                favorites:[],
                subLine:subline,
                line:line,
                creator:creator,
                modificationUser:creator,
                publicationDate:(new Date).getTime(),
                modificationDate:(new Date).getTime()
            }

            let newArticle:Article = { ...articleExtas ,...article }

            let result = await this.indexDocument<Article>(newArticle,'articles')
            return help.combine(newArticle,{id:result.body._id});        
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