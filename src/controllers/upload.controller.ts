import { Controller, Post, UseGuards,Request, UseInterceptors, UploadedFile, Param, Get, Res, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3BucketService } from "../services/s3-bucket.service";
import { Response } from 'express';

@Controller('files')
export class UploadController {
    
    constructor(private s3Bucket:S3BucketService){
    }

    @Post(':idArticle')
    @UseInterceptors(FileInterceptor('UploadFiles'))
    uploadFile(
        @UploadedFile() file,
        @Param('idArticle') idArticle
    ) {
        this.s3Bucket.uploadFile(idArticle,file)
    }

    @Post(':idArticle/delete')
    @UseInterceptors(FileInterceptor('UploadFiles'))
    deleteFile(
        @UploadedFile() file,
        @Param('idArticle') idArticle
    ) {
        this.s3Bucket.deleteFile(idArticle,file.originalname)
    }

    @Delete(':idArticle/:fileName')
    @UseInterceptors(FileInterceptor('UploadFiles'))
    deleteFileAux(
        @Param('idArticle') idArticle,
        @Param('fileName') fileName
    ) {
        this.s3Bucket.deleteFile(idArticle, fileName)
    }

    @Get(':idArticle/:fileName')
    getFile(
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