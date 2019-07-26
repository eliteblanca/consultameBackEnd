import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService, JwtValidator } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

const secretKey = "123";

@Module({
  imports: [
    JwtModule.register({
      secret:secretKey,
      signOptions:{
        expiresIn:3600
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtValidator],
})
export class AppModule {}
