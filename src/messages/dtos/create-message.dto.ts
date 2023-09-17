import { IsString } from "class-validator";

export class CreateMessageDto {
    // Makes sure that whenever we create an instance of the class that this property is a string
    @IsString()
    content: string;
}