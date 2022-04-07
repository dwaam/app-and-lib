import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLibraryService {
  getHelloFromLibrary() {
    return 'Hello from library';
  }
}
