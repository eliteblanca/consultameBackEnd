import { Injectable, NotFoundException, NotAcceptableException, ConflictException, forwardRef, Inject } from '@nestjs/common';
import { CategoriesModelService } from '../services/categories-model.service';
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsOptional, MaxLength, IsIn, Length } from 'class-validator';
import { ArticleIndex, Article } from '../indices/articleIndex';
import { CategoriesIndex } from '../indices/categoriesIndex';
import { LikeUserIndex } from '../indices/likeUserIndex';
import { FavoriteUserIndex } from '../indices/favoritesUserIndex';
import { S3BucketService } from '../services/s3-bucket.service';
import { PcrcModelService } from "../services/pcrc-model.service";
import * as async from 'async';
import { file } from '@babel/types';

export class SingleArticleDTO {
    @IsNotEmpty({ message: 'debes proporcionar un id de articulo' })
    @Length(20, 20, { message: 'debes proporcionar un id valido' })
    id: string;
}

export class articleDTO {

    @IsNotEmpty({ message: 'debes proporcionar un nombre al articulo' })
    @MinLength(3, { message: 'has proporcionado un titulo demasiado corto, debe contener minimo $constraint1 caracteres' })
    public title: string;

    public content: string;

    public obj: string;

    @MinLength(3, { message: 'has proporcionado un tag demasiado corto, debe contener minimo $constraint1 caracteres', each: true })
    @MaxLength(150, { message: 'has proporcionado un tag demasiado largo, debe contener maximo $constraint1 caracteres', each: true })
    @IsOptional()
    public tags?: string[];

    @MinLength(3, { message: 'has proporcionado un resumen demasiado corto, debe contener minimo $constraint1 caracteres' })
    @IsOptional()
    public resume?: string;

    @MinLength(3, { message: 'has proporcionado un vinculo demasiado corto, debe contener minimo $constraint1 caracteres', each: true })
    @IsOptional()
    public attached?: string[];

    @IsNotEmpty({ message: 'debes proporcionar un estado al articulo' })
    public state:string;

    @IsNotEmpty({ message: 'debes proporcionar una categoria' })
    @Length(20, 20, { message: 'debes proporcionar un id valido' })
    public category: string;

}

type group = { category:string } | { pcrc:string } | { cliente:string } ;

@Injectable()
export class ArticlesModelService {

    constructor(
        @Inject(forwardRef(() => CategoriesModelService))        
        private categoriesModel: CategoriesModelService,
        private articleIndex: ArticleIndex,
        private categoriesIndex: CategoriesIndex,
        private likeUserIndex: LikeUserIndex,
        private favoriteUserIndex: FavoriteUserIndex,        
        private S3BucketService: S3BucketService,
        private pcrcModel: PcrcModelService
    ) {  }

    //#region Public

    public async getArticlesByCategory(category: string, state:string = 'published', from:string = '0', size:string = '10'): Promise<(Article & { id: string; })[]> {        
        return await this.articleIndex.where({ category: category, state:state },from,size, { orderby:'modificationDate', order:'desc' });
    }

    public async getArticlesByQuery(query: string, group:group, state:string = 'published', from:string = '0', size:string = '10'  ): Promise<(Article & { id: string, highlight:string  })[]> {                        

        try {
            
            let q = {
                query: {
                    bool: {
                        must: [
                            {
                                multi_match: {
                                    'query': query,
                                    'fields': [ 'title^3', 'content^2', 'tags' ]
                                }
                            }
                        ],
                        filter: [
                            { 'term': group },
                            { 'term': { 'state': state } }
                        ]
                    }
                },
                from : parseInt(from),
                size : parseInt(size),
                highlight : {
                    fields : {
                        "content" : { "type" : "plain" }
                    }
                }
            };

            let result = await this.articleIndex.query(q);

            return result

        } catch (err) {
            console.log(err.meta.body.error);
        }
    }

    public async getArticlesByTag(options: { tag: string; subline: string; from?:string; size?:string }): Promise<(Article & { id: string })[]> {
        let result = await this.articleIndex.where({ tags: options.tag, pcrc:options.subline, state:'published' }, options.from, options.size, { orderby: 'publicationDate' , order:'desc'})
        return result
    }

    public getAllArticles = async (): Promise<(Article & { id: string; })[]> => {
        return await this.articleIndex.all();
    }

    public async getArticle(articleId: string): Promise<Article & { id: string; }> {
        try {

            let result = await this.articleIndex.updateScript(articleId,{
                'source' : 'ctx._source.views += 1',
                'lang': 'painless'
            });

            return await this.articleIndex.getById(articleId);

        } catch (error) {
            if (error.meta.statusCode == 404) {
                throw new NotFoundException('articulo no encontrado');
            }
        }
    }

    public async createArticle(article: articleDTO, creator: string): Promise<Article & { id: string }> {

        let pcrc: string = null;
        let cliente: { id: number; cliente: string; };
        try {
            var category = await this.categoriesIndex.getById(article.category);
        } catch (error) {
            if (error.meta.statusCode == 404) {
                throw new NotFoundException('categoria no encontrada');
            }
        }

        try {
            var isLeaft = await this.categoriesModel.isLeaftCategory(article.category);
        } catch (error) {
            console.log(error);
        }

        if (!isLeaft) {
            throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias');
        }

        pcrc = category.pcrc;
        
        try {
            cliente = await this.pcrcModel.getClienteOfPcrc(pcrc);
        } catch (error) {
            throw error;
            if (error.meta.statusCode == 404) {
                throw new NotFoundException('error al guardar el articulo');
            }
        }

        let articleExtras = {
            likes: [],
            disLikes: [],
            favorites: [],
            pcrc: pcrc,
            cliente: cliente.id.toString(),
            creator: creator,
            modificationUser: creator,
            publicationDate: (new Date).getTime(),
            modificationDate: (new Date).getTime(),
            views:0
        };

        let newArticle: Article = { ...articleExtras, ...article };

        return await this.articleIndex.create(newArticle);
    }

    public async addLike(articleId: string, id_usuario: string): Promise<any> {

        await this.removeDisLike(articleId, id_usuario);

        try {
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let existinglikes = await this.likeUserIndex.where({ type: 'like', article: articleId, user: id_usuario });

        if (!existinglikes.length) {
            this.likeUserIndex.create({ article: articleId, type: 'like', user: id_usuario });

            let updateQuery = {
                'source': 'ctx._source.likes.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            };

            await this.articleIndex.updateScript(articleId, updateQuery);
        } else {
            return new ConflictException('ya has dado like en este articulo');
        }

        return { status: "updated" };

    }

    public async addDisLike(articleId: string, id_usuario: string): Promise<any> {

        await this.removeLike(articleId, id_usuario);

        try {
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let existingDislikes = await this.likeUserIndex.where({ type: 'dislike', article: articleId, user: id_usuario });

        if (!existingDislikes.length) {
            this.likeUserIndex.create({ article: articleId, type: 'dislike', user: id_usuario });

            let updateQuery = {
                'source': 'ctx._source.disLikes.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            };

            await this.articleIndex.updateScript(articleId, updateQuery);
        } else {
            return new ConflictException('ya has dado like en este articulo');
        }

        return true;

    }

    public async removeDisLike(articleId: string, id_usuario: string): Promise<any> {
        let result = await this.likeUserIndex.deleteWhere({ article: articleId, user: id_usuario, type: 'dislike' });


        if (result.deleted) {
            try {
                var article = await this.getArticle(articleId);
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.disLikes.findIndex(userId => userId == id_usuario);
            if (index >= 0) {

                let updateQuery = {
                    'source': 'ctx._source.disLikes.remove(' + index + ')',
                    'lang': 'painless'
                };

                try {
                    await this.articleIndex.updateScript(articleId, updateQuery);
                } catch (error) {
                    console.log(error.meta.body.error);
                }
            }
        }
    }

    public async removeLike(articleId: string, id_usuario: string): Promise<any> {

        let result = await this.likeUserIndex.deleteWhere({ article: articleId, user: id_usuario, type: 'like' });


        if (result.deleted) {
            try {
                var article = await this.getArticle(articleId);
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.likes.findIndex(userId => userId == id_usuario);
            if (index >= 0) {

                let updateQuery = {
                    'source': 'ctx._source.likes.remove(' + index + ')',
                    'lang': 'painless'
                };

                try {
                    await this.articleIndex.updateScript(articleId, updateQuery);
                } catch (error) {
                    console.log(error.meta.body.error);
                }
            }
        }
    }

    public async addFavorite(articleId: string, id_usuario: string): Promise<any> {        

        let existingFavorites = await this.favoriteUserIndex.where({ article: articleId, user: id_usuario });

        if (!existingFavorites.length) {
            this.favoriteUserIndex.create({ article: articleId, user: id_usuario });

            let updateQuery = {
                'source': 'ctx._source.favorites.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            };

            await this.articleIndex.updateScript(articleId, updateQuery);
        } else {
            return new ConflictException('ya has agregado este articulo a tus favoritos');
        }

        return { status: 'updated' };
    }

    public async removeFavorite(articleId: string, id_usuario: string): Promise<any> {

        let result = await this.favoriteUserIndex.deleteWhere({ article: articleId, user: id_usuario });

        if (result.deleted) {
            try {
                var article = await this.getArticle(articleId);
            } catch (error) {
                throw new NotAcceptableException('el articulo no existe');
            }

            let index = article.favorites.findIndex(userId => userId == id_usuario);
            if (index >= 0) {
                let updateQuery = {
                    'source': 'ctx._source.favorites.remove(' + index + ')',
                    'lang': 'painless'
                };

                try {
                    await this.articleIndex.updateScript(articleId, updateQuery);
                } catch (error) {
                    console.log(error.meta.body.error);
                }
            }
        }
    }

    public deleteArticle = async (id: string): Promise<any> => {

        try {
            var article = await this.articleIndex.getById(id)
        } catch (error) {
            console.log(error);
        }

        await async.each( article.attached, async (fileName) => {
            await this.S3BucketService.deleteFile(id,fileName)
        })

        try {
            await this.articleIndex.delete(id);
        } catch (error) {
            console.log(error);
        }


        await this.favoriteUserIndex.deleteWhere({ article: id });

        await this.likeUserIndex.deleteWhere({ article: id });


    }

    public updateArticle = async (id: string, article: Partial<articleDTO>, modificationUser: string): Promise<any> => {

        let pcrc: string = null;
        let cliente: { id: number; cliente: string; };
        let articleExtas:Partial<Article>;

        if(!!article.category){
            try {
                var category = await this.categoriesIndex.getById(article.category);
            } catch (error) {
                if (error.meta.statusCode == 404) {
                    throw new NotFoundException('categoria no encontrada');
                }
            }
    
            try {
                var isLeaft = await this.categoriesModel.isLeaftCategory(article.category);
            } catch (error) {
                console.log(error);
            }
    
            if (isLeaft) {
                pcrc = category.pcrc;
            } else {
                throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias');
            }
    
            try {            
                cliente = await this.pcrcModel.getClienteOfPcrc(pcrc);
            } catch (error) {
                throw error;
                if (error.meta.statusCode == 404) {
                    throw new NotFoundException('error al guardar el articulo');
                }
            }
    
            articleExtas = {
                pcrc: pcrc,
                cliente: cliente.id.toString(),
                modificationUser: modificationUser,
                modificationDate: (new Date).getTime()
            };

        } else {

            articleExtas = {
                modificationUser: modificationUser,
                modificationDate: (new Date).getTime()
            };

        }

        let newArticle: Partial<Article> = { ...articleExtas, ...article };

        try {
            return await this.articleIndex.updatePartialDocument(id, newArticle);
        } catch (error) {
            console.log(error.meta.body.error);
        }
    }

    public deleteArticleFile = async (articleId:string, filename:string):Promise<any> => {
        try {
            var article = await this.getArticle(articleId);
        } catch (error) {
            throw new NotAcceptableException('el articulo no existe');
        }

        let index = article.attached.findIndex(fileName => fileName == filename)

        if (index >= 0) {
            let updateQuery = {
                'source': 'ctx._source.attached.remove(' + index + ')',
                'lang': 'painless'
            };

            try {
                await this.articleIndex.updateScript(articleId, updateQuery);
            } catch (error) {
                console.log(error.meta.body.error);
            }
        }
    }

    public async addArticleFile(articleId:string, filename:string): Promise<any> {

        let updateQuery = {
            'source': 'ctx._source.attached.add(params.file)',
            'lang': 'painless',
            'params': {
                'file': filename
            }
        };

        await this.articleIndex.updateScript(articleId, updateQuery);

        return { status: 'updated' };
    }

    //#endregion Public

}