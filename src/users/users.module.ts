import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EncryptPasswordMiddleware, UserNotFound } from './users.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EncryptPasswordMiddleware)
      .forRoutes({
        path: 'users',
        method: RequestMethod.POST,
      })
      .apply(UserNotFound)
      .forRoutes(
        {
          path: 'users/:id',
          method: RequestMethod.PATCH,
        },
        {
          path: 'users/:id',
          method: RequestMethod.DELETE,
        },
      );
  }
}
