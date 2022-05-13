import {Request, Response, NextFunction} from 'express';

class ProductsMiddleWare {
    async validateRequestProductBodyFields(
        req: Request, 
        res: Response,
        next: NextFunction) {
            if(req.body && req.body.name && req.body.price) {
                next();
            } else {
                res.status(400).send({"error": "missing required fields of product"});
            }
    }
}

export default new ProductsMiddleWare();