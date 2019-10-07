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
        
    attached:string[];
        
    @IsNotEmpty({message:"debes proporcionar un estado a la noticia"})
    state:string;
        
    @IsNotEmpty({message:"debes asignar la noticia a una sublinea"})
    subline:string;
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
            commentsList:''
        };

        return await this.newsIndex.create({...newsExtras, ...news  })

    }

}