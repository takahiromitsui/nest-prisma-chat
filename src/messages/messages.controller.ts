import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Message } from '@prisma/client';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':id')
  async getMessage(@Param() messageId: string): Promise<Message> {
    return this.messagesService.getMessage(messageId);
  }

  @Post()
  async createMessage(@Body() data: Message): Promise<Message> {
    return this.messagesService.createMessage(data);
  }

  @Patch(':id')
  async updateMessage(@Param('id') messageId: string, @Body() data: Message) {
    return this.messagesService.updateMessage(messageId, data);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') messageId: string) {
    return this.messagesService.deleteMessage(messageId);
  }
}
