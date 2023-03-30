import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RoomUsersService } from './room-users.service';
import { RoomUsersController } from './room-users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoomUserNotFound } from './room-users.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [RoomUsersController],
  providers: [RoomUsersService],
})
export class RoomUsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoomUserNotFound).forRoutes(
      {
        path: 'room-users/:id',
        method: RequestMethod.PATCH,
      },
      {
        path: 'room-users/:id',
        method: RequestMethod.DELETE,
      },
    );
  }
}
