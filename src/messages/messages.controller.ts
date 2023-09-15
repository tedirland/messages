import { Controller, Get, Post, Body, Param } from '@nestjs/common';


// Class decorator
@Controller('messages')
export class MessagesController {
    // Method decorator 
    @Get()
    listMessages(){

    }

    // Body and Param are what are known as argument decorators 
    @Post()
    createMessage(@Body() body: any){
        // extract body of incoming request
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: String){
        // extract the value of the wildcard
        console.log(id);
    }
}
