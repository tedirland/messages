import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
    async findOne(id: string) {
        // read the contents of the file

        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string) {
        const contents = await readFile('contents.json', 'utf8');
        const messages = JSON.parse(contents);
        // randomly generate an id
        const id = Math.floor(Math.random()*999)


        messages[id] = {id, content,}

        await writeFile('messages.json',JSON.stringify(messages))
    }

}