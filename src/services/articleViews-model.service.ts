import { Injectable } from '@nestjs/common';
import { Article } from '../indices/articleIndex';
import { ArticlesViewsIndex, articleView } from "../indices/articlesViewsIndex";
import { CargosModelService } from "../services/cargos-model.service";
@Injectable()
export class ArticleViewsModelService {

    constructor(
        private ArticlesViewsIndex:ArticlesViewsIndex,
        private cargosModel:CargosModelService
    ) { }
    
    async createView(article:Article & { id: string; }, userId:string){

        let bossInfo = await this.cargosModel.getAllBoss(userId)

        let view: articleView = {
            articleId:article.id,
            category:article.category,
            cliente:article.cliente,
            creator:article.creator,
            modificationDate:article.modificationDate,
            modificationUser:article.modificationUser,
            pcrc:article.pcrc,
            publicationDate:article.publicationDate,
            userId:userId,
            coordinador:bossInfo.coordinador,
            director:bossInfo.director,
            gerente:bossInfo.gerente,
            lider:bossInfo.lider,
            viewDate:(new Date).getTime()
        }

        return await this.ArticlesViewsIndex.create(view)
    }
}