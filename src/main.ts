import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import { DefaultPageFilter } from "./filters/default-page.filter";
import { ValidationPipe } from '@nestjs/common';
import { json } from 'body-parser';
import * as fs from 'fs';

async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync('../../../../../../../../key.pem'),
    cert: fs.readFileSync('../../../../../../../../cert.pem'),
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    httpsOptions,
  });

  app.use(json({ limit: '50mb'  }))

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.useGlobalFilters(new DefaultPageFilter())

  await app.listen(443);
  console.log(`Listen in port ${443}`)
}

bootstrap();