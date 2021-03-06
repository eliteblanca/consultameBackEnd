import * as compression from 'compression';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';

dotenv.config() //! no cambiar esta linea de orden

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import { DefaultPageFilter } from "./filters/default-page.filter";
import { ValidationPipe } from '@nestjs/common';
import { json } from 'body-parser';

async function bootstrap() {

  var app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(json({ limit: '50mb'  }))

  app.use(compression());

  app.use(cookieParser());

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.useGlobalFilters(new DefaultPageFilter())
  
  await app.listen(process.env.PORT);

  console.log(`Listen in port ${process.env.PORT}`)
}

bootstrap();