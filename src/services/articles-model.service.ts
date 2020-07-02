import { ConflictException, forwardRef, HttpException, Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import * as async from 'async';
import axios from 'axios';
import { IsNotEmpty, Length } from 'class-validator';
import { Article, ArticleIndex } from '../indices/articleIndex';
import { ArticleChangesIndex } from "../indices/articlesChangesIndex";
import { ArticleState, ArticleStateIndex } from "../indices/articleStatesIndex";
import { ArticlesViewsIndex } from "../indices/articleViewsIndex";
import { CategoriesIndex } from '../indices/categoriesIndex';
import { FavoriteStatesIndex } from "../indices/favoriteStatesIndex";
import { FavoriteUserIndex } from '../indices/favoritesUserIndex';
import { LikeUserIndex } from '../indices/likeUserIndex';
import { CargosModelService } from "../services/cargos-model.service";
import { CategoriesModelService } from '../services/categories-model.service';
import { PcrcModelService } from "../services/pcrc-model.service";
import { S3BucketService } from '../services/s3-bucket.service';
import { ArticleEventsModelService } from "./articleEvents-model.service";
import { UsersesionsIndex } from "../indices/usersesionsIndex";

export class SingleArticleDTO {
    @IsNotEmpty({ message: 'debes proporcionar un id de articulo' })
    @Length(20, 20, { message: 'debes proporcionar un id valido' })
    id: string;
}

export class articleDTO {

    public title: string;

    public content: string;

    public obj: string;

    public tags?: string[];

    public resume?: string;

    public attached?: string[];
  
    public state: string;

    public category: string;

    public type: string;
}

export class articleViewsDTO {
    initialDate:number
    finalDate:number
}

type group = { category: string } | { pcrc: string } | { cliente: string };

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
        private pcrcModel: PcrcModelService,
        private ArticleEventsModel: ArticleEventsModelService,
        private cargosModel:CargosModelService,
        private articleStateIndex:ArticleStateIndex,
        private favoriteStatesIndex:FavoriteStatesIndex,
        private articlesViewsIndex:ArticlesViewsIndex,
        private articleChangesIndex:ArticleChangesIndex,
        private UsersesionsIndex:UsersesionsIndex,

    ) { }

    public async getArticlesByCategory(category: string, state: string = 'published', from: string = '0', size: string = '10'): Promise<(Article & { id: string; })[]> {
        return await this.articleIndex.where({ category: category, state: state }, from, size, { orderby: 'modificationDate', order: 'desc' });
    }

    public async getArticlesByQuery(query: string, group: group, state: string = 'published', from: string = '0', size: string = '10'): Promise<(Article & { id: string, highlight: string })[]> {

            let q = {
                query: {
                    function_score: {
                        query: {                        
                            bool: {
                                must: [
                                    {
                                        multi_match: {
                                            'query': query,
                                            'fields': ['title^3', 'content^2', 'tags'],
                                            'tie_breaker' : 0.7,
                                            'fuzziness' : 2,
                                            'prefix_length': 3
                                        }
                                    }
                                ],
                                filter: [
                                    { 'term': group },
                                    { 'term': { 'state': state } }
                                ]
                            }
                        },
                        exp: { 
                            modificationDate: {
                                scale: "60d",
                                offset: "30d",
                                decay: 0.8
                            }
                        }
                    }
                },    
                from: parseInt(from),
                size: parseInt(size),
                highlight: {
                    fields: {
                        "content": { "type": "plain" }
                    }
                }
            };

            let result = await this.articleIndex.query(q);

            return result

    }

    public async getArticlesByTag(options: { tag: string; subline: string; from?: string; size?: string }): Promise<(Article & { id: string })[]> {
        let result = await this.articleIndex.where({ tags: options.tag, pcrc: options.subline, state: 'published' }, options.from, options.size, { orderby: 'publicationDate', order: 'desc' })
        return result
    }

    public getArticlesByUpdate = async (pcrcId: string, from: string = '0', size: string = '10'): Promise<(Article & { id: string; })[]> => {

        return await this.articleIndex.where({ pcrc: pcrcId, state: 'published' }, from, size, { orderby: 'modificationDate', order: 'desc' })
    }

    public getArticlesByView = async (pcrcId: string, from: string = '0', size: string = '10'): Promise<(Article & { id: string; })[]> => {
        return await this.articleIndex.where({ pcrc: pcrcId, state: 'published' }, from, size, { orderby: 'views', order: 'desc' })
    }

    public getAllArticles = async (): Promise<(Article & { id: string; })[]> => {        
        return await this.articleIndex.all();
    }

    public async getArticle(articleId: string, userId: string): Promise<Article & { id: string; }> {

        let article = await this.articleIndex.getById(articleId);

        if (article) {

            let result = await this.articleIndex.updateScript(articleId, {
                'source': 'ctx._source.views += 1',
                'lang': 'painless'
            });

            return article

        } else {
            throw new HttpException({
                "message": "articulo no encontrado"
            }, 404)
        }

    }

    public async createArticle(article: articleDTO, creator: string): Promise<Article & { id: string }> {

        let pcrc: string = null
        let cliente: { id: number; cliente: string; }

        var category = await this.categoriesIndex.getById(article.category)

        if (!!!category) {
            throw new HttpException({
                "message": `la categoria '${article.category}' no existe`
            }, 400)
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
            if (error.meta.statusCode == 404) {
                throw new NotFoundException('error al guardar el articulo');
            }
            throw error;
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
            views: 0
        }

        let newArticle: Article = { ...articleExtras, ...article }

        let creationResult = await this.articleIndex.create(newArticle)

        let newQuillJsObj = await this.updateArticleImages(creationResult.id, creationResult.obj)

        await this.articleIndex.updatePartialDocument(creationResult.id, { obj: newQuillJsObj})

        await this.updateArticleState({
                articulo:creationResult.id,
                categoria:creationResult.category,
                cliente:creationResult.cliente,
                pcrc:creationResult.pcrc
            },
            creationResult.state,
            creator
        )

        let previousState = ''

        let articleEvent = ''

        if(article.state == 'published'){
            articleEvent = 'articulo creado'
        } else {
            articleEvent = 'borrador creado'
        }

        if(!!article.obj){
            await this.articleChangesIndex.create({
                articulo: creationResult.id,
                articlecontent: article.obj,
                categoria: newArticle.category,
                cliente: newArticle.cliente,
                pcrc: newArticle.pcrc,
                event: articleEvent,
                eventDate: (new Date()).getTime(),
                previoustate: previousState,
                user: creator,
                articlestate: article.state
            })
        }

        return creationResult
    }

    public async addLike(articleId: string, id_usuario: string): Promise<any> {

        let article = await this.articleIndex.getById(articleId)

        if(!!!article){
            throw new HttpException({
                "message": "articulo no encontrado"
            }, 404)
        }

        await this.removeDisLike(articleId, id_usuario);                

        let existinglikes = await this.likeUserIndex.where({ type: 'like', article: articleId, user: id_usuario });

        if (!existinglikes.length) {
            await this.likeUserIndex.create({ article: articleId, type: 'like', user: id_usuario });

            let updateQuery = {
                'source': 'ctx._source.likes.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            };

            await this.articleIndex.updateScript(articleId, updateQuery);

            await this.updateVotesState({
                articleId: articleId,
                category: article.category,
                cliente: article.cliente,
                pcrc: article.pcrc
            }, id_usuario, 'add', 'like')

            await this.ArticleEventsModel.createEvent(articleId, id_usuario, 'like')

        } else {
            return new ConflictException('ya has dado like en este articulo');
        }

        return { status: "updated" };

    }

    public async addDisLike(articleId: string, id_usuario: string): Promise<any> {

        let article = await this.articleIndex.getById(articleId)

        if(!!!article){
            throw new HttpException({
                "message": "articulo no encontrado"
            }, 404)
        }

        await this.removeLike(articleId, id_usuario);


        let existingDislikes = await this.likeUserIndex.where({ type: 'dislike', article: articleId, user: id_usuario });

        if (!existingDislikes.length) {
            await this.likeUserIndex.create({ article: articleId, type: 'dislike', user: id_usuario })

            let updateQuery = {
                'source': 'ctx._source.disLikes.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            }

            await this.articleIndex.updateScript(articleId, updateQuery)

            await this.ArticleEventsModel.createEvent(articleId, id_usuario, 'dislike')

            await this.updateVotesState({
                articleId: articleId,
                category: article.category,
                cliente: article.cliente,
                pcrc: article.pcrc
            }, id_usuario, 'add', 'dislike')

        } else {
            return new ConflictException('ya has dado like en este articulo');
        }

        return true;

    }

    public async removeDisLike(articleId: string, id_usuario: string): Promise<any> {

        var article = await this.articleIndex.getById(articleId)

        if(!!!article){
            throw new HttpException({
                "message": `articulo no encontrado`
            }, 404)
        }

        let result = await this.likeUserIndex.deleteWhere({ article: articleId, user: id_usuario, type: 'dislike' })

        if (result.deleted) {

            let index = article.disLikes.findIndex(userId => userId == id_usuario)

            if (index >= 0) {

                let updateQuery = {
                    'source': 'ctx._source.disLikes.remove(' + index + ')',
                    'lang': 'painless'
                }

                await this.articleIndex.updateScript(articleId, updateQuery)

                await this.updateVotesState({
                    articleId: articleId,
                    category: article.category,
                    cliente: article.cliente,
                    pcrc: article.pcrc
                }, id_usuario, 'delete', 'dislike')

            }
        }
    }

    public async removeLike(articleId: string, id_usuario: string): Promise<any> {

        let result = await this.likeUserIndex.deleteWhere({ article: articleId, user: id_usuario, type: 'like' });


        if (result.deleted) {
            var article = await this.articleIndex.getById(articleId)

            if(!!!article){
                throw new HttpException({
                    "message": `articulo no encontrado`
                }, 404)
            }

            let index = article.likes.findIndex(userId => userId == id_usuario);

            if (index >= 0) {

                let updateQuery = {
                    'source': 'ctx._source.likes.remove(' + index + ')',
                    'lang': 'painless'
                };

                await this.articleIndex.updateScript(articleId, updateQuery);

                await this.updateVotesState({
                    articleId: articleId,
                    category: article.category,
                    cliente: article.cliente,
                    pcrc: article.pcrc
                }, id_usuario, 'delete', 'like')
            }
        }
    }

    public async addFavorite(articleId: string, id_usuario: string): Promise<any> {

        let existingFavorites = await this.favoriteUserIndex.where({ article: articleId, user: id_usuario });

        if (!existingFavorites.length) {
            await this.favoriteUserIndex.create({ article: articleId, user: id_usuario });

            let updateQuery = {
                'source': 'ctx._source.favorites.add(params.user)',
                'lang': 'painless',
                'params': {
                    'user': id_usuario
                }
            };
            
            await this.articleIndex.updateScript(articleId, updateQuery);
            
            await this.ArticleEventsModel.createEvent(articleId, id_usuario, 'fav');

            let article = await this.articleIndex.getById(articleId)

            await this.updateVotesState({
                articleId:article.id,
                category:article.category,
                cliente:article.cliente,
                pcrc:article.pcrc
            },
            id_usuario, 'add','favorite')

        } else {
            return new ConflictException('ya has agregado este articulo a tus favoritos');
        }

        return { status: 'updated' };
    }

    public async removeFavorite(articleId: string, id_usuario: string): Promise<any> {

        let result = await this.favoriteUserIndex.deleteWhere({ article: articleId, user: id_usuario });

        if (result.deleted) {
            var article = await this.articleIndex.getById(articleId)

            if(!!!article){
                throw new HttpException({
                    "message": `articulo no encontrado`
                }, 404)
            }

            let index = article.favorites.findIndex(userId => userId == id_usuario);

            if (index >= 0) {
                let updateQuery = {
                    'source': 'ctx._source.favorites.remove(' + index + ')',
                    'lang': 'painless'
                };

                await this.articleIndex.updateScript(articleId, updateQuery);

                await this.updateVotesState({
                    articleId: articleId,
                    category: article.category,
                    cliente: article.cliente,
                    pcrc: article.pcrc
                }, id_usuario, 'delete','favorite')                
            }
        }
    }

    public deleteArticle = async (id: string, userId:string): Promise<any> => {

        var article = await this.articleIndex.getById(id)

        if (!!!article) {
            throw new HttpException({
                "message": `articulo no encontrado`
            }, 404)
        }

        await async.each(article.attached, async (fileName) => {
            await this.S3BucketService.deleteFile(id, fileName)
        })

        await this.deleteArticleImagenes(article.obj, id)

        await this.articleIndex.updatePartialDocument(id, { state:'deleted' })

        await this.favoriteUserIndex.deleteWhere({ article: id })

        await this.likeUserIndex.deleteWhere({ article: id })

        await this.updateArticleState({
                articulo:id,
                categoria:article.category,
                cliente: article.cliente,
                pcrc:article.pcrc
            },
            'deleted',
            userId
        )

        let prevState = await this.ArticleEventsModel.getChangesBy([{filter:'articulo', value:id}], 949784794968, (new Date()).getTime(),0 , 1)

        let previousState = ''

        if(prevState.items.length){
            previousState = prevState.items[0].id
        }

        let articleEvent = ''

        if(article.state == 'published'){
            articleEvent = 'articulo eliminado'
        } else {
            articleEvent = 'borrador eliminado'
        }

        if(!!article.obj){
            await this.articleChangesIndex.create({
                articulo: id,
                articlecontent: '',
                categoria: article.category,
                cliente: article.cliente,
                pcrc: article.pcrc,
                event: articleEvent,
                eventDate: (new Date()).getTime(),
                previoustate: previousState,
                user: userId,
                articlestate: article.state
            })
        }

    }

    public updateArticle = async (id: string, article: Partial<articleDTO>, modificationUser: string): Promise<any> => {

        let pcrc: string = null
        let cliente: { id: number; cliente: string; }
        let articleExtas: Partial<Article>

        if (!!article.category) {

            var category = await this.categoriesIndex.getById(article.category);

            if (!!!category) {
                throw new HttpException({
                    "message": `la categoria '${article.category}' no existe`
                }, 400)
            }

            try {
                var isLeaft = await this.categoriesModel.isLeaftCategory(article.category);
            } catch (error) {
                console.log(error)
            }

            if (isLeaft) {
                pcrc = category.pcrc;
            } else {
                throw new NotAcceptableException('no puedes agregar un articulo a una categoria que contenga subcategorias')
            }

            try {
                cliente = await this.pcrcModel.getClienteOfPcrc(pcrc)
            } catch (error) {
                if (error.meta.statusCode == 404) {
                    throw new NotFoundException('error al guardar el articulo');
                }
                throw error
            }

            articleExtas = {
                pcrc: pcrc,
                cliente: cliente.id.toString(),
                modificationUser: modificationUser,
                modificationDate: (new Date).getTime()
            }

        } else {

            articleExtas = {
                modificationUser: modificationUser,
                modificationDate: (new Date).getTime()
            }

        }

        let newArticle: Partial<Article> = { ...articleExtas, ...article };
            
        await this.updateArticleState({
            articulo: id,
            categoria: newArticle.category,
            cliente: newArticle.cliente, 
            pcrc: newArticle.pcrc
        },
        newArticle.state,
        modificationUser)
    
        let prevState = await this.ArticleEventsModel.getChangesBy([{filter:'articulo', value:id}], 949784794968, (new Date()).getTime(),0 , 1)

        let previousState = ''

        var articleEvent = ''

        if(prevState.items.length){
            previousState = prevState.items[0].id

            if(article.state){

                var articleEvent = 'articulo actualizado'
                
                if(prevState.items[0].articlestate == 'published' && article.state != 'published'){
                    var articleEvent = 'articulo archivado'
                }

                if(prevState.items[0].articlestate != 'published' && article.state == 'published'){
                    var articleEvent = 'articulo publicado'
                }
            }
        }

        if(!!article.obj){
            await this.articleChangesIndex.create({
                articulo: id,
                articlecontent: article.obj,
                categoria: newArticle.category,
                cliente: newArticle.cliente,
                pcrc: newArticle.pcrc,
                event: articleEvent,
                eventDate: (new Date()).getTime(),
                previoustate: previousState,
                user: modificationUser,
                articlestate: article.state
            })
        }

        let objWithoutImages = await this.updateArticleImages(id, newArticle.obj)

        newArticle.obj = objWithoutImages

        await this.compareDeletedImages( id, objWithoutImages)

        await this.articleIndex.updatePartialDocument(id, newArticle);

    }

  

    public updateArticleState = async (articleInfo:  Omit<ArticleState, 'initialDate'|'finalDate'|'initialDateUser'|'finalDateUser'|'state'>, newState:string, userId:string) => {
        let currentArticleStates = await this.articleStateIndex.where({ articulo: articleInfo.articulo })

        if(!!currentArticleStates.length){
            let estadoActual = currentArticleStates.find(state => {
                return  (new Date(state.finalDate)).getFullYear() == 9999
            })

            await this.articleStateIndex.updatePartialDocument(estadoActual.id, { finalDate:(new Date).getTime(), finalDateUser:userId })
        }

        await this.articleStateIndex.create({
            articulo: articleInfo.articulo,
            categoria: articleInfo.categoria,
            cliente: articleInfo.cliente,
            initialDate: (new Date).getTime(),
            initialDateUser: userId,
            finalDate: (new Date).setFullYear(9999),
            finalDateUser: userId,
            pcrc: articleInfo.pcrc,
            state: newState
        })
    }

    private updateVotesState = async (articleInfo:{ articleId:string, category:string, cliente: string, pcrc:string }, userId:string, operation:'add' | 'delete', state:'favorite' | 'like' | 'dislike') => {

        if(operation == 'add'){

            let userBoss = await this.cargosModel.getAllBoss(userId)


            await this.favoriteStatesIndex.create({
                articulo:articleInfo.articleId,
                categoria:articleInfo.category,
                cliente:articleInfo.cliente,
                coordinador:userBoss.coordinador,
                director:userBoss.director,
                gerente:userBoss.gerente,
                lider:userBoss.lider,
                pcrc:articleInfo.pcrc,
                user:userId,
                initialDate:(new Date()).getTime(),
                finalDate: (new Date).setFullYear(9999),
                state:state
            })

        } else {

            let query = {
                query: {
                    bool: {
                        filter: [
                            { term: { articleId: articleInfo.articleId } },
                            { term: { user: userId } },
                            { range: { initialDate: { lt: (new Date()).getTime() } } },
                            { range: { finalDate: { gt: (new Date()).getTime() } } }
                        ]
                    }
                }
            }

            let estadoActual = await this.favoriteStatesIndex.query(query)

            if( !!estadoActual.length ){
                if( (new Date( estadoActual[0].finalDate)).getFullYear() == 9999 ){
                    await this.favoriteStatesIndex.updatePartialDocument(estadoActual[0].id, { finalDate: (new Date()).getTime() })
                }
            }
        }
    }

    public deleteArticleFile = async (articleId:string, filename:string):Promise<any> => {
        var article = await this.articleIndex.getById(articleId)

        if(!!!article){
            throw new HttpException({
                "message": `articulo no encontrado`
            }, 404)
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

    public async addArticleFile(articleId: string, filename: string): Promise<any> {

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

    public getArticleHistory = async (articleId:string) => {

        let history = await this.articleStateIndex.where({ articulo: articleId })

        return history
    }

    public addArticleView = async (articleId:string, initialDate:number, finalDate:number, userId:string) => {

        var article = await this.articleIndex.getById(articleId)        

        if (!!!article) {
            throw new HttpException({
                "message": `articulo no encontrado`
            }, 404)
        }

        let allboss = await this.cargosModel.getAllBoss(userId)        

        let result = await Promise.all([
            await this.articlesViewsIndex.create({
                articulo: articleId,
                categoria: article.category,
                cliente: article.cliente,
                pcrc: article.pcrc,
                coordinador: allboss.coordinador,
                director: allboss.director,
                gerente: allboss.gerente,
                lider: allboss.lider,
                user: userId,
                initialDate: initialDate,
                finalDate: finalDate,
                duration: finalDate - initialDate
            }),
            await this.ArticleEventsModel.createEvent(article, userId, 'view')
        ])

        return {
            status:'created'
        }
    }

    public async prueba(id): Promise<any> {
        return await this.S3BucketService.deleteImage('Lh_XEHMByBFDprp_iGfJ1593715427663')           
    }

    async updateArticleImages(articleId:string, quillJsObjString?:string) {
        
        let quillJsObj:any
        
        if(!quillJsObjString){

            let article = await this.articleIndex.getById(articleId)

            quillJsObj = JSON.parse(article.obj).ops

        } else {

            quillJsObj = JSON.parse(quillJsObjString).ops

        }

        let base64Strings = await async.map(quillJsObj, async (action, index) => {

            let actionAux = action 

            if(action?.insert?.image){
                if((action.insert.image as string).startsWith('data:image/',0) ){

                    let uploadResult = await this.S3BucketService.uploadImage(action.insert.image, articleId)

                    actionAux.insert.image = `/files/` + uploadResult.Key

                }

                if((action.insert.image as string).startsWith('http://multiconsultabanco',0) ){
                    let result = await axios.get(action.insert.image, {
                        responseType: 'arraybuffer'
                    })
    
                    let base64 = new Buffer(result.data, 'binary').toString('base64')
    
                    let uploadResult = await this.S3BucketService.uploadImage("data:image/jpeg;base64,"+base64, articleId)

                    actionAux.insert.image = `/files/` + uploadResult.Key
                }
            }

            return action
        })

        if(quillJsObjString){

            return JSON.stringify({ ops: base64Strings })

        } else {            

            let updateArticleResult = await this.articleIndex.updatePartialDocument(articleId,{ obj: JSON.stringify({ ops: base64Strings }) })

            return updateArticleResult
        }

    }

    async deleteArticleImagenes(oldQuillObj:any, articleId:string) {

        let oldQuillObjImages = JSON.parse(oldQuillObj).ops.map((action, index) => {
            if(action?.insert?.image){
                if( (action.insert.image as string).startsWith(`/files/${articleId}/${articleId}`,0) ) {
                    return action.insert.image.replace(`/files/`,'')
                }
            }

            return null

        }).filter( data => data )    

        let imageDeletePromises = oldQuillObjImages.map((s3Key:string) =>{
            return async () => {
                return await this.S3BucketService.deleteImage(s3Key)
            }
        })
        
        let result = await async.parallel(imageDeletePromises)

        return result

    }

    public async compareDeletedImages(articleId:string, newQuillsObj:string){
        let oldQuillObj = (await this.articleIndex.getById(articleId)).obj

        let oldQuillObjImages = JSON.parse(oldQuillObj).ops.map((action, index) => {
            if(action?.insert?.image){
                if( (action.insert.image as string).startsWith(`/files/${articleId}/${articleId}`,0) ) {
                    return action.insert.image.replace(`/files/`,'')
                }
            }

            return null

        }).filter( data => data )

        let newQuillsObjImages = JSON.parse(newQuillsObj).ops.map((action, index) => {
            if(action?.insert?.image){
                if( (action.insert.image as string).startsWith(`/files/${articleId}/${articleId}`,0) ) {
                    return action.insert.image.replace(`/files/`,'')
                }
            }

            return null

        }).filter( data => data )

        var imagesTodelete = oldQuillObjImages.filter( key => {
            return !newQuillsObjImages.includes(key)
        })

        let imageDeletePromises = imagesTodelete.map((s3Key:string) =>{
            return async () => {
                return await this.S3BucketService.deleteImage(s3Key)
            }
        })

        let result = await async.parallel(imageDeletePromises)

    }

}