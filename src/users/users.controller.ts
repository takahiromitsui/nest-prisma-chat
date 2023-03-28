import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
  @Post()
  createUser(@Body() data: User): Promise<User> {
    // need middleware to encrypt password
    return this.usersService.createUser(data);
  }
}
