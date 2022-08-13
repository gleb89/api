import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
// views
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Get('hello/:id')
  // getHello2(@Param() id: string): string {
  //   return this.appService.getHello2(id);
  // }
}
