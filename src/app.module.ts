import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './controllers/app.controller';
import { AuthService, JwtValidator } from './services/auth.service';
import { ArticlesController } from './controllers/articles.controller';
import { searchController } from './controllers/search.controller';
import { UsersController } from './controllers/users.controller';
import { LinesController } from './controllers/lines.controller';
import { SubLinesController } from './controllers/sublines.controller';
import { EsClientController } from './controllers/es-client.controller';
import { rolesController } from './controllers/roles.controller';
import { EsClientService } from './services/es-client.service';
import { ArticlesModelService } from './services/articles-model.service';
import { SearchModelService } from './services/search-model.service';
import { UserModelService } from './services/user-model.service';
import { CategoriesModelService } from './services/categories-model.service';
import { PermissionsModelService } from './services/permissions-model.service';
import { LinesModelService } from './services/lines-model.service';
import { CategoriesController } from './controllers/categories.controller';
import { ResourcesController } from './controllers/resources.controller';
import { PermissionsController } from './controllers/permissions.controller';
import { ArticleIndex } from './indices/articleIndex';
import { LinesIndex } from "./indices/linesIndex";
import { SublinesIndex } from "./indices/sublinesIndex";
import { CategoriesIndex } from "./indices/categoriesIndex";
import { SearchsIndex } from './indices/searchIndex';
import { LikeUserIndex } from './indices/likeUserIndex';
import { FavoriteUserIndex } from './indices/favoritesUserIndex';
import { UserIndex } from './indices/userIndex';
import { UserSubLinesIndex } from './indices/userSubLinesIndex';
import { RolesIndex } from './indices/rolesIndex';
import { ResourcesIndex } from './indices/resourcesIndex';
import { PermissionsIndex } from './indices/permissionsIndex';
import { UploadController } from './controllers/upload.controller';
import { S3BucketService } from './services/s3-bucket.service';
import { NewsController } from './controllers/news.controller';
import { NewsModelService } from './services/news-model.service';
import { NewsIndex } from "./indices/newsIndex";


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
  controllers: [
    AppController,
    ArticlesController,
    searchController,
    UsersController,
    LinesController,
    EsClientController,
    CategoriesController,
    SubLinesController,
    rolesController,
    ResourcesController,
    PermissionsController,
    UploadController,
    NewsController
  ],
  providers: [        
    AuthService,
    JwtValidator,    
    EsClientService,
    ArticlesModelService,
    SearchModelService,
    UserModelService,
    CategoriesModelService,
    LinesModelService,
    PermissionsModelService,
    NewsModelService,
    ArticleIndex,
    LinesIndex,
    SublinesIndex,
    CategoriesIndex,
    SearchsIndex,
    LikeUserIndex,
    FavoriteUserIndex,
    UserIndex,
    UserSubLinesIndex,
    RolesIndex,
    ResourcesIndex,
    PermissionsIndex,
    S3BucketService,
    NewsIndex,
  ],
})
export class AppModule {}
