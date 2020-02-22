import { Injectable, InternalServerErrorException, Inject, forwardRef } from '@nestjs/common';
import { ArticlesModelService } from "../services/articles-model.service";
import * as S3 from 'aws-sdk/clients/s3';


@Injectable()
export class S3BucketService {

    constructor( 
        @Inject(forwardRef(() => ArticlesModelService))
        private articlesModel:ArticlesModelService,
    ){ }

    s3Client = new S3({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_KEY,
        region: 'us-west-1',
        sslEnabled:false
    });

    async uploadFile(idArticle: string, file: any) {
        let params = { 
            Bucket: process.env.BUCKET_NAME,
            Key: `${idArticle}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype
        };

        try {
            
            let uploadResul = await this.s3Client.upload(params).promise()

            let articlefileUploadResul = await this.articlesModel.addArticleFile(idArticle, file.originalname)

        } catch(err) {
            console.log(err)
            throw new InternalServerErrorException('error al guardar el archivo');
        }
    }

    getFile(idArticle:string, fileName:string){
        let params = { Bucket: process.env.BUCKET_NAME, Key: `${idArticle}/${fileName}` };

        return this.s3Client.getObject(params).createReadStream();
    }

    deleteFile = async (idArticle:string, fileName:any) => {

        let params = { Bucket: process.env.BUCKET_NAME, Key: `${idArticle}/${fileName}` };

        let deleteResult = await this.s3Client.deleteObject(params).promise();

        let articleDeleteResult = await this.articlesModel.deleteArticleFile(idArticle,fileName)

        return {status: 'deleted'}
        
    }

    
}
