import { Injectable } from '@nestjs/common';
// crud
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World22!';
  }
  getHello2(params): string {
    return 'gfgdfdfdfd!'+params.id;
  }
}
