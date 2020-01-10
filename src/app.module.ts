import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { AppController } from './controllers/app.controller';
import { ArticlesController } from './controllers/articles.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CommentsController } from './controllers/comments.controller';
import { EsClientController } from './controllers/es-client.controller';
import { NewsController } from './controllers/news.controller';
import { PcrcController } from './controllers/pcrc.controller';
import { searchController } from './controllers/search.controller';
import { UploadController } from './controllers/upload.controller';
import { UsersController } from './controllers/users.controller';
import { ArticleIndex } from './indices/articleIndex';
import { CategoriesIndex } from "./indices/categoriesIndex";
import { CommentsIndexService } from './indices/commentsIndex.service';
import { FavoriteUserIndex } from './indices/favoritesUserIndex';
import { LikeUserIndex } from './indices/likeUserIndex';
import { NewsIndex } from "./indices/newsIndex";
import { PermissionsIndex } from './indices/permissionsIndex';
import { ResourcesIndex } from './indices/resourcesIndex';
import { RolesIndex } from './indices/rolesIndex';
import { SearchsIndex } from './indices/searchIndex';
import { UserIndex } from './indices/userIndex';
import { ArticlesEventsIndex } from "./indices/articlesEventsIndex";
import { Clientes } from "./jarvisEntities/clientes.entity";
import { datosPersonales } from "./jarvisEntities/datosGenerales.entity";
import { Pcrc } from "./jarvisEntities/pcrc.entity";
import { Personal } from "./jarvisEntities/personal.entity";
import { CentrosCostos } from "./jarvisEntities/centrosCostos.entity";
import { ArticlesModelService } from './services/articles-model.service';
import { JwtValidator, LdapService } from './services/auth.service';
import { CategoriesModelService } from './services/categories-model.service';
import { CommentsModelService } from './services/comments-model.service';
import { EsClientService } from './services/es-client.service';
import { NewsModelService } from './services/news-model.service';
import { PcrcModelService } from "./services/pcrc-model.service";
import { S3BucketService } from './services/s3-bucket.service';
import { SearchModelService } from './services/search-model.service';
import { UserModelService } from './services/user-model.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ReportsController } from './controllers/reports.controller';
import { ArticleEventsModelService } from "./services/articleEvents-model.service";
import { CargosModelService } from "./services/cargos-model.service";
import { ReportsModelService } from './services/reports-model.service';
import { ClientesController } from './controllers/clientes.controller';
import { DirectoresController } from './controllers/directores.controller';
import { GerentesController } from './controllers/gerentes.controller';
import { CoordinadoresController } from './controllers/coordinadores.controller';



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
      username: process.env.JARVIS_USER,
      password: process.env.JARVIS_PASS,
      database: 'jarvis',
      entities: [
        Pcrc,
        Clientes,
        Personal,
        datosPersonales,
        CentrosCostos
      ],
      synchronize: false,
    }),
    MorganModule.forRoot()
  ],
  controllers: [
    AppController,
    ArticlesController,
    searchController,
    UsersController,
    EsClientController,
    CategoriesController,
    UploadController,
    NewsController,
    CommentsController,
    PcrcController,
    ReportsController,
    ClientesController,
    DirectoresController,
    GerentesController,
    CoordinadoresController
  ],
  providers: [  
    JwtValidator,    
    LdapService,
    EsClientService,
    ArticlesModelService,
    SearchModelService,
    UserModelService,
    CategoriesModelService,
    NewsModelService,
    ArticleEventsModelService,
    CargosModelService,
    CommentsModelService,
    PcrcModelService, 
    ArticleIndex,
    CategoriesIndex,
    SearchsIndex,
    LikeUserIndex,
    FavoriteUserIndex,
    UserIndex,
    RolesIndex,
    ResourcesIndex,
    PermissionsIndex,
    ArticlesEventsIndex,
    S3BucketService,
    NewsIndex,
    CommentsIndexService,    
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('tiny'),
    },
    ReportsModelService
  ],
})
export class AppModule {  }