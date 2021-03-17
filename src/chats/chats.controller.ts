import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Chat } from './chat.model';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { FilterDto } from './dto/filter-chat.dto';
import { Response } from 'express';

@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}
  @Get()
  getMessages(@Query() filterDto: FilterDto, @Res() res: Response): Response {
    const chats = this.chatsService.getMessages(filterDto);
    console.log(typeof chats);
    return res.send(chats);
  }

  @Post()
  insertMessage(
    @Body() createChatDto: CreateChatDto,
    @Res() res: Response,
  ): Response {
    const chats = this.chatsService.insertMessage(createChatDto);
    return res.send(chats);
  }
}
