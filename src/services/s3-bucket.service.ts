import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';
import * as aws from 'aws-sdk';


@Injectable()
export class S3BucketService {
    s3Client = new S3({
        accessKeyId: 'AKIA36TUP7PLRILOAXGK',
        secretAccessKey: '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',
        region: 'us-west-1'
    });

    async uploadFile(idArticle: string, file: any) {

        console.log(file)

        let params = { 
            Bucket: 'multiconsultakonecta',
            Key: `${idArticle}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype
        };

        try {
            return await this.s3Client.upload(params).promise()
        }catch(err){
            console.log(err)
            throw new InternalServerErrorException('error al guardar el archivo');
        }
    }

    getFile(idArticle:string, fileName:string){
        let params = { Bucket: 'multiconsultakonecta', Key: `${idArticle}/${fileName}` };
        return this.s3Client.getObject(params).createReadStream();
    }
}
