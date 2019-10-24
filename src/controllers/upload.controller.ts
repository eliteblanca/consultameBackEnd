import { Controller, Post, UseGuards,Request, UseInterceptors, UploadedFile, Param, Get, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3BucketService } from "../services/s3-bucket.service";
import { Response } from 'express';

@Controller('files')
export class UploadController {
    
    constructor(private s3Bucket:S3BucketService){
    }

    @Post(':idArticle')
    @UseInterceptors(FileInterceptor('UploadFiles'))
    uploadFile(@UploadedFile() file, @Param('idArticle') idArticle) {
        this.s3Bucket.uploadFile(idArticle,file)
    }

    @Get(':idArticle/:fileName')
    uploadFiles(
        @Param('idArticle') idArticle,
        @Param('fileName') fileName,
        @Res() res:Response
    ):any{
        let stream = this.s3Bucket.getFile(idArticle, fileName)
        stream.on('error', function(err){
            res.status(500).json({error:"Error -> " + err});
        }).pipe(res);
    }
}