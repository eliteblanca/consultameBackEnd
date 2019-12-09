import * as fs from 'fs';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
dotenv.config() //! no cambiar esta linea de orden

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import { DefaultPageFilter } from "./filters/default-page.filter";
import { ValidationPipe } from '@nestjs/common';
import { json } from 'body-parser';

async function bootstrap() {

  try {

    const httpsOptions = {
      key: fs.readFileSync('../../../../../../../../key.pem'),
      cert: fs.readFileSync('../../../../../../../../cert.pem'),
    };

    var app = await NestFactory.create<NestExpressApplication>(AppModule,{
      httpsOptions
    });

  } catch (error) {
      var app = await NestFactory.create<NestExpressApplication>(AppModule);
  }

  app.use(compression());

  app.use(json({ limit: '50mb'  }))

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.useGlobalFilters(new DefaultPageFilter())

  

  await app.listen(process.env.PORT);

  console.log(`Listen in port ${process.env.PORT}`)
}

bootstrap();