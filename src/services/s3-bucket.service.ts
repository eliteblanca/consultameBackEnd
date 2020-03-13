import { Injectable, InternalServerErrorException, Inject, forwardRef } from '@nestjs/common';
import { ArticlesModelService } from "../services/articles-model.service";
import * as S3 from 'aws-sdk/clients/s3';
import * as aws from 'aws-sdk';


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
            Bucket: 'bucketpruebaconsultamekonecta',
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

    base64MimeType(encoded) {
        var result = null;
      
        if (typeof encoded !== 'string') {
          return result;
        }
      
        var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
      
        if (mime && mime.length) {
          result = mime[1];
        }
      
        return result;
    }
    
    async uploadImage(base64String:string, idArticle:string){

        
        var mimeType = this.base64MimeType(base64String)

        // buf = new Buffer(req.body.imageBinary.replace(/^data:image\/\w+;base64,/, ""),'base64')
        let buf = new Buffer(base64String.replace(/^data:image\/\w+;base64,/, "") ,'base64')

        let params = { 
            Bucket: 'bucketpruebaconsultamekonecta',
            Key: `${idArticle}/${idArticle}${(new Date()).getTime()}`,
            Body: buf,
            ContentType: mimeType
        };

        try {

            let uploadResul = await this.s3Client.upload(params).promise()

            return uploadResul

        } catch(err) {
            console.log(err)
            throw new InternalServerErrorException('error al guardar el archivo');
        }

    }

    getFile(idArticle:string, fileName:string){
        let params = { Bucket: 'bucketpruebaconsultamekonecta', Key: `${idArticle}/${fileName}` };

        return this.s3Client.getObject(params).createReadStream();
    }

    deleteFile = async (idArticle:string, fileName:any) => {

        let params = { Bucket: 'bucketpruebaconsultamekonecta', Key: `${idArticle}/${fileName}` };

        let deleteResult = await this.s3Client.deleteObject(params).promise();

        let articleDeleteResult = await this.articlesModel.deleteArticleFile(idArticle,fileName)

        return {status: 'deleted'}
        
    }

    deleteImage = async (key:any) => {

        console.log(key)

        let params = { Bucket: 'bucketpruebaconsultamekonecta', Key: `${key}` };

        let deleteResult = await this.s3Client.deleteObject(params).promise();

        console.log(deleteResult)

        return deleteResult
    }
}