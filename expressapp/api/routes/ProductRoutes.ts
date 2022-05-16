import express, {Request, Response, NextFunction} from 'express';

import ProductController from '../controllers/ProductController';

import ProductsMiddleWare from '../controllers/ProductsMiddleWare';

export class ProductRoutes {
    constructor(private app: express.Application){}

    configureRoutes(): express.Application {
    
        //http://localhost:8080/products
        this.app.route('/products')
            .get(ProductController.listProducts)
            .post(ProductsMiddleWare.validateRequestProductBodyFields, ProductController.createProduct);
             //http://localhost:8080/products/2
        this.app.route('/products/:id')
        .all((req:Request, response: Response, next: NextFunction) => {
            next();
        })
        .get(ProductController.getProductById)
        .put((req:Request, response: Response) => {
            response.status(200).send("Updated product with id " + req.params.id);
        })
        .delete((req:Request, response: Response) => {
            response.status(200).send("DELETED " + req.params.id);
        });

        return this.app;
    }
 }
