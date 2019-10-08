import { Injectable, BadRequestException } from '@nestjs/common';
import { NewsIndex,news } from "../indices/newsIndex";
import { MinLength, ValidateIf, IsNotEmpty, IsAscii, IsOptional, MaxLength, IsIn, Length } from 'class-validator';
import { SublinesIndex } from "../indices/sublinesIndex";


export class postNewsDTO {

    @IsNotEmpty({message:"debes proporcionar un titulo a la noticia"})
    title:string;    
    
    @IsNotEmpty({message:"debes proporcionar un contenido a la noticia"})
    content:string;
    
    @IsNotEmpty({message:"debes proporcionar un contenido a la noticia"})
    obj:string;
        
    @IsNotEmpty({message:"debes proporcionar un estado a la noticia"})
    state:string;
        
    @IsNotEmpty({message:"debes asignar la noticia a una sublinea"})
    subline:string;
}

export class updateNewsDTO {

    @IsNotEmpty({message:"debes proporcionar un titulo a la noticia"})
    title:string;

    @IsNotEmpty({message:"debes proporcionar un contenido a la noticia"})
    content:string;

    @IsNotEmpty({message:"debes proporcionar un contenido a la noticia"})
    obj:string;

    @IsNotEmpty({message:"debes proporcionar un estado a la noticia"})
    state:string;        
}

@Injectable()
export class NewsModelService {




    constructor(
        private newsIndex:NewsIndex,
        private sublinesIndex:SublinesIndex
    ){ }

    getNews = async (sublineId:string):Promise<(news & { id: string; })[]> =>{
        return await this.newsIndex.where({ subline:sublineId, state:'published' })
    }

    getSingleNews = async (newsId:string):Promise<(news & { id: string; })> =>{
        try {
            return await this.newsIndex.getById(newsId)
        } catch (error) {
            console.log(error)
        }
    }

    postNews = async (news:postNewsDTO, userId:string):Promise<(news & { id: string; })> =>{
        try{
            let subline = await this.sublinesIndex.getById(news.subline)
        }catch(err){
            throw new BadRequestException('la sublinea no existe')
        }

        let newsExtras = {
            publicationDate:(new Date).getTime(),
            modificationDate:(new Date).getTime(),
            modificationUser:userId,
            creator:userId,
            commentsList:'',
            attached:[]
        };

        return await this.newsIndex.create({...newsExtras, ...news  })

    }

    updateNews = async (idArticulo:string, news: updateNewsDTO, idUsuario: string):Promise<any> =>{
        let newsExtras = {
            modificationDate:(new Date).getTime(),
            modificationUser:idUsuario
        }

        try {            
            return await this.newsIndex.updatePartialDocument(idArticulo,{...news,...newsExtras})
        } catch (error) {
            console.log(error)
        }

    }

    deleteNews = async (idArticulo: string): Promise<any> =>{
        try {
            return await this.newsIndex.delete(idArticulo)
        } catch (error) {
            console.log(error)            
        }
    }

    getDrafts = async (idSubline: string):Promise<(news & { id: string; })[]> => {
        return await this.newsIndex.where({ subline:idSubline, state:'archived' })
    }

}