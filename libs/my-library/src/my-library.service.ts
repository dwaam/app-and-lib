import { Injectable } from '@nestjs/common';
import { getDatabase } from '@mycompany/my-library/database.config';
import { InjectRepository } from '@nestjs/typeorm';
import { LogisticSite } from '@mycompany/my-library/logistic-site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MyLibraryService {
  constructor(
    @InjectRepository(LogisticSite)
    private logisticSiteRepository: Repository<LogisticSite>,
  ) {}

  getHelloFromLibrary() {
    console.log(getDatabase());
    // return 'Hello from library';
    return this.logisticSiteRepository.find();
  }
}
