import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException, HttpException } from '@nestjs/common';
import { join } from 'path';

@Catch(NotFoundException)
export class DefaultPageFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.sendFile(join(__dirname, '../..', 'public/index.html'));
  }
}
