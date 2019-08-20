import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './controllers/app.controller';
import { AuthService, JwtValidator } from './services/auth.service';
import { ArticlesController } from './controllers/articles.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { searchController } from './controllers/search.controller';
import { UsersController } from './controllers/users.controller';
import { LinesController } from './controllers/lines.controller';
import { EsClientController } from './controllers/es-client.controller';
import { EsClientService } from './services/es-client.service';
import { ArticlesModelService } from './services/articles-model.service';
import { SearchModelService } from './services/search-model.service';
import { UserModelService } from './services/user-model.service';
import { CategoriesModelService } from './services/categories-model.service';
import { LinesModelService } from './services/lines-model.service';
import { CategoriesController } from './controllers/categories.controller';
import { ArticleIndex } from './indices/articleIndex';
import { LinesIndex } from "./indices/linesIndex";
import { SublinesIndex } from "./indices/sublinesIndex";
import { CategoriesIndex } from "./indices/categoriesIndex";
import { SearchsIndex } from './indices/searchIndex';

const secretKey = "123";

@Module({
  imports: [
    JwtModule.register({
      secret:secretKey,
      signOptions:{
        expiresIn:3600
      }
    }),
    MorganModule.forRoot(),
  ],
  controllers: [AppController, ArticlesController, searchController, UsersController, LinesController, EsClientController, CategoriesController],
  providers: [    
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
    AuthService,
    JwtValidator,    
    EsClientService,
    ArticlesModelService,
    SearchModelService,
    UserModelService,
    CategoriesModelService,
    LinesModelService,
    ArticleIndex,
    LinesIndex,
    SublinesIndex,
    CategoriesIndex,
    SearchsIndex
  ],
})
export class AppModule {}
