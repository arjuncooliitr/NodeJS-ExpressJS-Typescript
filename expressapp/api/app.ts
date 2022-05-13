import express, {Request, Response} from 'express';
import {Server, createServer} from 'http';
import tokenGuard from './token.guard';
import {ProductRoutes} from './routes/ProductRoutes';
import { UserRoutes } from './routes/UserRoutes';

const app: express.Application = express();
const server:Server = createServer(app);

// middleware
app.use(express.json()); // string -> json conversion

// http://localhost:3000/
app.get("/", (req:Request, response: Response) => {
    response.status(200).send("Sever is running !!!");
});

new UserRoutes(app).configureRoutes();

app.use(tokenGuard);

 //http://localhost:8080/products
new ProductRoutes(app).configureRoutes();

server.listen(3000, ()=> console.log("server is running!!"));

export default app;