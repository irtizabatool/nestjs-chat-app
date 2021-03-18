import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { FilterDto } from './dto/filter-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}
  @Get()
  async getMessages(@Query() filterDto: FilterDto) {
    return await this.chatsService.getMessages(filterDto);
  }

  @Post()
  async insertMessage(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.insertMessage(createChatDto);
  }
}
