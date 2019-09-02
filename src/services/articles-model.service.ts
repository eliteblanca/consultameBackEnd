import { Injectable, NotFoundException, NotAcceptableException, ConflictException, forwardRef, Inject } from '@nestjs/common';
import { CategoriesModelService } from "../services/categories-model.service";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsOptional, MaxLength, IsIn, Length} from "class-validator";
import { ArticleIndex, Article } from "../indices/articleIndex";
import { SublinesIndex } from "../indices/sublinesIndex";
import { CategoriesIndex } from "../indices/categoriesIndex";
import { LikeUserIndex } from "../indices/likeUserIndex";
import { FavoriteUserIndex } from "../indices/favoritesUserIndex";

export class getArticlesDTO{

    @ValidateIf(o => !o.category)
    @IsNotEmpty({ message: "si no se proporciona una categoria se debe proporcionar una query" })
    @IsAscii({ message: "la query debe contener carecteres Ascii" })
    @MinLength(3,{ message: "has proporcionado una query demasiado corta, debe contener minimo $constraint1 caracteres" })
    query:string;
    
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
    public subline:string;

    @IsNotEmpty({ message: "debes proporcionar una linea"})
    @Length(20,20,{ message: "debes proporcionar un id valido"})
    public line:string;

}
@Injectable()
export class ArticlesModelService{


    constructor(        
        @Inject(forwardRef(() => CategoriesModelService))
        private categoriesModel:CategoriesModelService,
        private articleIndex:ArticleIndex,
        private sublinesIndex:SublinesIndex,
        private categoriesIndex:CategoriesIndex,
        private likeUserIndex:LikeUserIndex,
        private favoriteUserIndex:FavoriteUserIndex
        ) {
    }

//#region Public

    public async getArticlesByCategory(category: string): Promise<(Article & { id: string; })[]> {

        return await this.articleIndex.where({category:category})

    }

    public async getArticlesByQuery(options: { query: string; subline: string; }): Promise<(Article & { id: string; })[]> {
        try {

            let query = {
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
                                { "term": { "subLine": options.subline } }
                            ]
                        }
                    }
                }
            

            return await this.articleIndex.query(query)

        } catch (err) {
            console.log(err)
        }
    }

    public async getArticle(articleId: string): Promise<Article & { id: string; }> {
        try {
            return await this.articleIndex.getById(articleId)
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
                var category = await this.categoriesIndex.getById(article.category)
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
                subline = category.sublinea
            }else{
                throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias')
            }

            try {
                let sublineAux = await this.sublinesIndex.getById(subline)
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
                subline:subline,
                line:line,
                creator:creator,
                modificationUser:creator,
                publicationDate:(new Date).getTime(),
                modificationDate:(new Date).getTime()
            }
            
            let newArticle:Article = { ...articleExtas ,...article }
             
            return await this.articleIndex.create(newArticle)
    }

    public async addLike(articleId:string,id_usuario:string):Promise<any>{

        await this.removeDisLike(articleId, id_usuario)

        try {
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let existinglikes = await this.likeUserIndex.where({type:"like",article:articleId,user:id_usuario})

        if(!existinglikes.length){
            this.likeUserIndex.create({article:articleId,type:'like',user:id_usuario})

            let updateQuery = {                
                "source": "ctx._source.likes.add(params.user)",
                "lang": "painless",
                "params" : {
                    "user" : id_usuario
                }
            }

            this.articleIndex.updateScript(articleId,updateQuery)
        }else{
            return new ConflictException('ya has dado like en este articulo')
        }

        return true

    }

    public async addDisLike(articleId:string,id_usuario:string):Promise<any>{

        await this.removeLike(articleId,id_usuario)

        try {
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let existingDislikes = await this.likeUserIndex.where({type:"dislike",article:articleId,user:id_usuario})

        if(!existingDislikes.length){
            this.likeUserIndex.create({article:articleId,type:'dislike',user:id_usuario})

            let updateQuery = {                
                "source": "ctx._source.disLikes.add(params.user)",
                "lang": "painless",
                "params" : {
                    "user" : id_usuario
                }
            }

            this.articleIndex.updateScript(articleId,updateQuery)
        }else{
            return new ConflictException('ya has dado like en este articulo')
        }

        return true

    }

    public async removeDisLike(articleId:string, id_usuario:string):Promise<any>{
        let result = await this.likeUserIndex.deleteWhere({article:articleId,user:id_usuario,type:'dislike'})
        
        console.log(result)

        if(result.deleted){
            try {
                var article = await this.getArticle(articleId)
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.disLikes.findIndex(userId => userId == id_usuario)
            if(index >= 0){
                
                let updateQuery = {
                    "source": "ctx._source.disLikes.remove(" + index + ")",
                    "lang": "painless"
                }

                try {
                    await this.articleIndex.updateScript(articleId,updateQuery)
                } catch (error) {
                    console.log(error.meta.body.error)
                }
            }
        }
    }

    public async removeLike(articleId:string, id_usuario:string):Promise<any>{

        let result = await this.likeUserIndex.deleteWhere({article:articleId,user:id_usuario,type:'like'})
        
        console.log(result)

        if(result.deleted){
            try {
                var article = await this.getArticle(articleId)
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.likes.findIndex(userId => userId == id_usuario)
            if(index >= 0){
                
                let updateQuery = {
                    "source": "ctx._source.likes.remove(" + index + ")",
                    "lang": "painless"
                }

                try {
                    await this.articleIndex.updateScript(articleId,updateQuery)
                } catch (error) {
                    console.log(error.meta.body.error)
                }
            }
        }
    }

    public async addFavorite(articleId:string, id_usuario:string):Promise<any>{

        try {
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let existingFavorites = await this.favoriteUserIndex.where({article:articleId, user:id_usuario})

        if(!existingFavorites.length){
            this.favoriteUserIndex.create({article:articleId, user:id_usuario})

            let updateQuery = {
                "source": "ctx._source.favorites.add(params.user)",
                "lang": "painless",
                "params" : {
                    "user" : id_usuario
                }
            }

            this.articleIndex.updateScript(articleId, updateQuery)
        }else{
            return new ConflictException('ya has agregado este articulo a tus favoritos')
        }

        return true
    }

    public async removeFavorite(articleId:string, id_usuario:string):Promise<any>{

        let result = await this.favoriteUserIndex.deleteWhere({ article:articleId, user:id_usuario })

        if(result.deleted){
            try {
                var article = await this.getArticle(articleId)
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.favorites.findIndex(userId => userId == id_usuario)
            if(index >= 0){
                let updateQuery = {
                    "source": "ctx._source.favorites.remove(" + index + ")",
                    "lang": "painless"
                }

                try {
                    await this.articleIndex.updateScript(articleId,updateQuery)
                } catch (error) {
                    console.log(error.meta.body.error)
                }
            }
        }
    }

    public deleteArticle = async (id: string): Promise<any> => {
        try {            
            await this.articleIndex.delete(id)
        } catch (error) {
            console.log(error)
        }

        await this.favoriteUserIndex.deleteWhere({article:id})

        await this.likeUserIndex.deleteWhere({article:id})
    }

    public updateArticle = async ( id:string ,article:articleDTO ,modificationUser:string ):Promise<any> => {
        
        let subline:string = null;
        let line:string = null;
            try {
                var category = await this.categoriesIndex.getById(article.category)
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
                subline = category.sublinea
            }else{
                throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias')
            }

            try {
                let sublineAux = await this.sublinesIndex.getById(subline)
                line = sublineAux.line                
            } catch (error) {
                throw error
                if( error.meta.statusCode == 404 ){
                    throw new NotFoundException('error al guardar el articulo');
                }
            }

            let articleExtas = {
                subline:subline,
                line:line,
                modificationUser:modificationUser,
                modificationDate:(new Date).getTime()
            }
            
            let newArticle:Article = { ...articleExtas ,...article }
             try {
                
                console.log(newArticle)

                 return await this.articleIndex.updatePartialDocument(id,newArticle)
            } catch (error) {
                console.log(error.meta.body.error)
            }
    }

//#endregion Public

}