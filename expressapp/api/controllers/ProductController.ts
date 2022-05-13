import {Request, Response} from 'express';

import ProductService from '../../services/ProductService';

export class ProductController {
    async listProducts(req:Request, res: Response) {
        const products = await ProductService.getProducts(); 
        res.status(200).send(products);
    }
    //http://localhost:3000/api/products/3
    async getProductById(req:Request, res: Response) {
        const product = await ProductService.getProductById(+req.params.id);
        res.status(200).send(product);
    }

    //http://localhost:3000/api/products/
    // payload contains product data
    async createProduct(req:Request, res: Response) {
        const msg = await ProductService.addProduct(req.body);
        res.status(201).send(msg);
    }

}

export default new ProductController();