import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './controllers/app.controller';
import { AuthService, JwtValidator } from './services/auth.service';
import { ArticlesController } from './controllers/articles.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SuggestionsController } from './controllers/suggestions.controller';
import { UsersController } from './controllers/users.controller';
import { LinesController } from './controllers/lines.controller';
import { EsClientController } from './controllers/es-client.controller';
import { EsClientService } from './services/es-client.service';
import { ArticlesModelService } from './services/articles-model.service';
import { SearchModelService } from './services/search-model.service';
import { UserModelService } from './services/user-model.service';
import { CategoriesModelService } from './services/categories-model.service';
import { LinesModelService } from './services/lines-model.service';

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
  controllers: [AppController, ArticlesController, SuggestionsController, UsersController, LinesController, EsClientController],
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
    LinesModelService
  ],
})
export class AppModule {}
