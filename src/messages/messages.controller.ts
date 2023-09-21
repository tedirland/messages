import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Class decorator
@Controller('messages')
export class MessagesController {
    // Method decorator 
    @Get()
    listMessages(){

    }

    // Body and Param are what are known as argument decorators 
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        // extract body of incoming request
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: String){
        // extract the value of the wildcard
        console.log(id);
    }
}
