import IProduct from '../models/IProduct';

class ProductService {
    products: IProduct[] = [
        {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
        {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
        {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
        {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

    getProducts(): Promise<IProduct[]> {
        return new Promise((resolve, reject) => {
            resolve(this.products);
        })
    }

    getProductById(id:number): Promise<IProduct | undefined> {
        return new Promise((resolve, reject) => {
            resolve(this.products.find(p => p.id === id));
        })
    }

    addProduct(p:IProduct) : Promise<string> {
        return new Promise((resolve, reject) => {
            this.products.push(p);
            resolve("Product " + p.name + " added!!!");
        });
    }
}

export default new ProductService();  