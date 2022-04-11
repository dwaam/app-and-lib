import { Module } from '@nestjs/common';
import { MyLibraryService } from './my-library.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabase } from '@mycompany/my-library/database.config';
import { LogisticSite } from '@mycompany/my-library/logistic-site.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '/app/conf/.env'] }),
    TypeOrmModule.forRoot(getDatabase()),
    TypeOrmModule.forFeature([LogisticSite]),
  ],
  providers: [MyLibraryService],
  exports: [MyLibraryService, TypeOrmModule],
})
export class MyLibraryModule {}
