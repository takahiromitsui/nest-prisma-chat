import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RoomUsersService } from './room-users.service';
import { RoomUsersController } from './room-users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoomUsersController],
  providers: [RoomUsersService],
})
export class RoomUsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }
}
