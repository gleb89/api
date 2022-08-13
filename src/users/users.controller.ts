import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly appService: UsersService) { }

  @Get()
  async getUsers(): Promise<string> {
    return await this.appService.getUsers();
  }
  @Get(':id')
  async getUser(@Param() id: string): Promise<string> {
    return await this.appService.getUser(id);
  }
}
