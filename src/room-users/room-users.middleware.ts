import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomUserNotFound implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const roomUser = await this.prisma.roomUser.findFirst({
      where: {
        id: id,
      },
    });
    if (!roomUser) {
      throw new NotFoundException(`RoomUser with id "${id}" not found`);
    }
    console.log(roomUser);
    next();
  }
}
