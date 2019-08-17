import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import { DefaultPageFilter } from "./filters/default-page.filter";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{logger:console});

  const port: number = 3001;

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.useGlobalFilters(new DefaultPageFilter())

  await app.listen(port);
  console.log("Listen in",`http://localhost:${port}`)
}
bootstrap();
