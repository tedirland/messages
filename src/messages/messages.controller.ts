import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Class decorator
@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor() {
        // Don't do this on real app, use DI
        this.messagesService = new MessagesService();
    }
    // Method decorator 
    @Get()
    listMessages(){
       return this.messagesService.findAll()

    }

    // Body and Param are what are known as argument decorators 
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        // extract body of incoming request
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        // extract the value of the wildcard
       return this.messagesService.findOne(id)
        
    }
}
