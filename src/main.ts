import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import { DefaultPageFilter } from "./filters/default-page.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{logger:console});

  const port: number = 3000;

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalFilters(new DefaultPageFilter())

  console.log("Listen in",`http://localhost:${port}`)
  await app.listen(port);
}
bootstrap();
