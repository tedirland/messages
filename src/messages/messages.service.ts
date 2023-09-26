import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    
    // Marking recieved arguments as public means they will automatically be assigned
    // as arguments to the class
    constructor(public messagesRepo: MessagesRepository) {}

     findOne(id:string){
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content:string){
        return this.messagesRepo.create(content);
    }
}