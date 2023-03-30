import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessage(id: string): Promise<Message> {
    return this.prisma.message.findFirst({
      where: {
        id: id,
      },
    });
  }

  async createMessage(data: Message): Promise<Message> {
    return this.prisma.message.create({ data });
  }

  async updateMessage(id: string, data: Message): Promise<Message> {
    return this.prisma.message.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteMessage(id: string): Promise<Message> {
    return this.prisma.message.delete({
      where: {
        id: id,
      },
    });
  }
}
