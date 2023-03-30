import { Injectable } from '@nestjs/common';
import { RoomUser } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomUsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createRoomUser(data: RoomUser): Promise<RoomUser> {
    return this.prisma.roomUser.create({ data });
  }

  async getRoomUser(id: string): Promise<RoomUser> {
    return this.prisma.roomUser.findFirst({
      where: {
        id: id,
      },
    });
  }
}
