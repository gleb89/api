import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly appService: UsersService) { }

  @Get()
  async getUsers() {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.appService.create(createUserDto);
  }
  @Get(':id')
  async getUser(@Param() id: object) {
    return await this.appService.getUser(id);
  }
  @Patch(':id')
  update(@Param('id') id: object, @Body() CreateUserDto: CreateUserDto) {
    return this.appService.update(id, CreateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
