import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Room } from '@prisma/client';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  async getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  @Get(':id')
  async getRoomById(@Param('id') roomId: string): Promise<Room> {
    return this.roomsService.getRoomById(roomId);
  }

  @Post()
  async createRoom(@Body() data: Room): Promise<Room> {
    return this.roomsService.createRoom(data);
  }

  @Patch(':id')
  async updateRoom(
    @Param('id') roomId: string,
    @Body() data: Room,
  ): Promise<Room> {
    return this.roomsService.updateRoom(roomId, data);
  }

  @Delete(':id')
  async deleteRoom(@Param('id') roomId: string): Promise<Room> {
    return this.roomsService.deleteRoom(roomId);
  }
}
