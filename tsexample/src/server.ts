import fs, {ReadStream} from 'fs';
import {createServer, Server, IncomingMessage, ServerResponse} from 'http';

const server:Server = createServer((request:IncomingMessage, response: ServerResponse) => {
    switch(request.url) {
        case "/file" :
            const stream:ReadStream = fs.createReadStream("./src/server.ts");
            stream.on("data", (chunk:string) => {
                response.write(chunk);
            });
            stream.on("end", () => {
                response.end();
            });
            break;
        case "/":
            response.end("Hello World!!!");
    }
});

server.listen(1234);