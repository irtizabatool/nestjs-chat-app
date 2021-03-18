import { Injectable } from '@nestjs/common';
import { Chat } from './chat.model';
import { CreateChatDto } from './dto/create-chat.dto';
import { FilterDto } from './dto/filter-chat.dto';

@Injectable()
export class ChatsService {
  private chats: Chat[] = [];
  getAllMessages(): Chat[] {
    return this.chats;
  }

  getMessages(filterDto: FilterDto) {
    const { sender, receiver } = filterDto;
    let chats = this.getAllMessages();
    chats = chats.filter(
      (txt) =>
        (txt.sender === sender && txt.receiver === receiver) ||
        (txt.sender === receiver && txt.receiver === sender),
    );
    return chats;
  }

  insertMessage(createChatDto: CreateChatDto): Chat {
    const { sender, receiver, message } = createChatDto;
    const chat: Chat = {
      sender,
      receiver,
      message,
    };
    this.chats.push(chat);
    return chat;
  }
}
