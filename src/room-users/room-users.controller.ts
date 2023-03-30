import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RoomUser } from '@prisma/client';
import { RoomUsersService } from './room-users.service';

@Controller('room-users')
export class RoomUsersController {
  constructor(private readonly roomUsersService: RoomUsersService) {}

  @Get(':id')
  async getRoomUser(@Param(':id') roomUserId: string): Promise<RoomUser> {
    return this.roomUsersService.getRoomUser(roomUserId);
  }

  @Post()
  async createRoomUser(@Body() data: RoomUser): Promise<RoomUser> {
    return this.roomUsersService.createRoomUser(data);
  }

  @Patch(':id')
  async updateRoomUser(
    @Param('id') roomUserId: string,
    @Body() data: RoomUser,
  ): Promise<RoomUser> {
    return this.roomUsersService.updateRoomUser(roomUserId, data);
  }

  @Delete(':id')
  async deleteRoomUser(@Param('id') roomUserId: string): Promise<RoomUser> {
    return this.roomUsersService.deleteRoomUser(roomUserId);
  }
}
