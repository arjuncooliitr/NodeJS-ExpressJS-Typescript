import express, {Request, Response} from 'express';
import {Server, createServer} from 'http';
import tokenGuard from './token.guard';
import {ProductRoutes} from './routes/ProductRoutes';
import { UserRoutes } from './routes/UserRoutes';
import IProduct from '../models/IProduct';
import path from 'path';
const app: express.Application = express();
const server:Server = createServer(app);

app.use(express.static('public'))

app.set('views', path.join(__dirname, '/views')); // by default

app.set("view engine", "ejs");

// middleware
app.use(express.json()); // string -> json conversion

// http://localhost:3000/
app.get("/", (req:Request, response: Response) => {
    response.status(200).send("Sever is running !!!");
});

app.get("/productView", (req:Request, response: Response) => {
    const products: IProduct[] = [
        {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
        {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
        {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
        {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
    
        //SSR
    response.render("product", {products: products});
});

new UserRoutes(app).configureRoutes();

app.use(tokenGuard);

 //http://localhost:8080/products
new ProductRoutes(app).configureRoutes();

server.listen(3000, ()=> console.log("server is running!!"));

export default app;