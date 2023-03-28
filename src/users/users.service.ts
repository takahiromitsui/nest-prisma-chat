import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createUser(data: User): Promise<User> {
    // need middleware to encrypt password
    return this.prisma.user.create({ data });
  }

  async updateUser(id: string, data: User): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
