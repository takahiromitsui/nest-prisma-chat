import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
  // should be authorised later
  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() data: User): Promise<User> {
    return this.usersService.createUser(data);
  }
  // should be authorised later
  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() data: User): Promise<User> {
    return this.usersService.updateUser(userId, data);
  }

  // should be authorised later
  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}
