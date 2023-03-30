import { Injectable } from '@nestjs/common';
import { RoomUser } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomUsersService {
  constructor(private readonly prisma: PrismaService) {}
  async getRoomUser(id: string): Promise<RoomUser> {
    return this.prisma.roomUser.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createRoomUser(data: RoomUser): Promise<RoomUser> {
    return this.prisma.roomUser.create({ data });
  }
  async updateRoomUser(id: string, data: RoomUser): Promise<RoomUser> {
    return this.prisma.roomUser.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteRoomUser(id: string): Promise<RoomUser> {
    return this.prisma.roomUser.delete({
      where: {
        id: id,
      },
    });
  }
}
