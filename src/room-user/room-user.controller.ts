import { Body, Controller, Post } from '@nestjs/common';
import { RoomUser } from '@prisma/client';
import { RoomUserService } from './room-user.service';

@Controller('room-user')
export class RoomUserController {
  constructor(private readonly roomUserService: RoomUserService) {}

  @Post()
  async createRoomUser(@Body() data: RoomUser): Promise<RoomUser> {
    return this.roomUserService.createRoomUser(data);
  }
}
