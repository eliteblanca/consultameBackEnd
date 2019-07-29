import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './controllers/app.controller';
import { AuthService, JwtValidator } from './services/auth.service';
import { ArticlesController } from './controllers/articles.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModelService } from './services/model.service';
import { SuggestionsController } from './controllers/suggestions.controller';

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
  controllers: [AppController, ArticlesController, SuggestionsController],
  providers: [    
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
    AuthService,
    JwtValidator,
    ModelService
  ],
})
export class AppModule {}
