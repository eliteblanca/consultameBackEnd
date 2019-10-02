import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException, HttpException } from '@nestjs/common';
import { join } from 'path';

@Catch(NotFoundException)
export class DefaultPageFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let url:string = ctx.getRequest().url;    
    
    if(url.startsWith('/api')){      
      let responseObj = {
        status : exception.getStatus(),
        message: exception.message.message
      }
      response.status(responseObj.status).json(responseObj);
    }else{
      response.sendFile(join(__dirname, '../..', 'public/index.html'));
    }
  }
}