import { Injectable } from '@nestjs/common';
import { Room } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  async getRooms(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }

  async getRoomById(id: string): Promise<Room> {
    return this.prisma.room.findFirst({
      where: {
        id: id,
      },
    });
  }

  async createRoom(data: Room): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  async updateRoom(id: string, data: Room): Promise<Room> {
    return this.prisma.room.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteRoom(id: string): Promise<Room> {
    return this.prisma.room.delete({
      where: {
        id: id,
      },
    });
  }
}
