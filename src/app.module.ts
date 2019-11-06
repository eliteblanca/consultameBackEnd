import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { JwtValidator, LdapService } from './services/auth.service';
import { ArticlesController } from './controllers/articles.controller';
import { searchController } from './controllers/search.controller';
import { UsersController } from './controllers/users.controller';
import { EsClientController } from './controllers/es-client.controller';
import { rolesController } from './controllers/roles.controller';
import { EsClientService } from './services/es-client.service';
import { ArticlesModelService } from './services/articles-model.service';
import { SearchModelService } from './services/search-model.service';
import { UserModelService } from './services/user-model.service';
import { CategoriesModelService } from './services/categories-model.service';
import { PermissionsModelService } from './services/permissions-model.service';
import { CategoriesController } from './controllers/categories.controller';
import { ResourcesController } from './controllers/resources.controller';
import { PermissionsController } from './controllers/permissions.controller';
import { UploadController } from './controllers/upload.controller';

import { ArticleIndex } from './indices/articleIndex';
import { CategoriesIndex } from "./indices/categoriesIndex";
import { SearchsIndex } from './indices/searchIndex';
import { LikeUserIndex } from './indices/likeUserIndex';
import { FavoriteUserIndex } from './indices/favoritesUserIndex';
import { UserIndex } from './indices/userIndex';
import { RolesIndex } from './indices/rolesIndex';
import { ResourcesIndex } from './indices/resourcesIndex';
import { PermissionsIndex } from './indices/permissionsIndex';
import { NewsIndex } from "./indices/newsIndex";
import { UserPcrcIndex } from "./indices/userPcrcIndex";

import { S3BucketService } from './services/s3-bucket.service';
import { NewsController } from './controllers/news.controller';
import { NewsModelService } from './services/news-model.service';
import { CommentsModelService } from './services/comments-model.service';
import { CommentsIndexService } from './indices/commentsIndex.service';
import { CommentsController } from './controllers/comments.controller';
import { Pcrc } from "./jarvisEntities/pcrc.entity";
import { Clientes } from "./jarvisEntities/clientes.entity";
import { Personal } from "./jarvisEntities/personal.entity";
import { PcrcController } from './controllers/pcrc.controller';
import { PcrcModelService } from "./services/pcrc-model.service";


const secretKey = "123";

@Module({
  imports: [
    JwtModule.register({
      secret:secretKey,
      signOptions:{
        expiresIn:'1h'
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.102.180.196',
      port: 3306,
      username: 'EXP_CONSULTA',
      password: '4XP3RI3NCIA2019_*',
      database: 'jarvis',
      entities: [
        Pcrc,
        Clientes,
        Personal
      ],
      synchronize: false,
    }),
  ],
  controllers: [
    AppController,
    ArticlesController,
    searchController,
    UsersController,
    EsClientController,
    CategoriesController,
    rolesController,
    ResourcesController,
    PermissionsController,
    UploadController,
    NewsController,
    CommentsController,
    PcrcController
  ],
  providers: [  
    JwtValidator,    
    LdapService,
    EsClientService,
    ArticlesModelService,
    SearchModelService,
    UserModelService,
    CategoriesModelService,
    PermissionsModelService,
    NewsModelService,
    ArticleIndex,
    CategoriesIndex,
    SearchsIndex,
    LikeUserIndex,
    FavoriteUserIndex,
    UserIndex,
    RolesIndex,
    ResourcesIndex,
    PermissionsIndex,
    S3BucketService,
    NewsIndex,
    CommentsIndexService,
    CommentsModelService,
    PcrcModelService,
    UserPcrcIndex,
  ],
})
export class AppModule {}
