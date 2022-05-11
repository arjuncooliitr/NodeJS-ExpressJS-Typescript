import {forEach, fibanocci, memoize} from './lib';
import Product  from './Product';

let nos:number[] = [5,6,2,11,4];

forEach(nos, console.log);

let products: Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

forEach(products, console.log);


console.log("----------");

console.time("first");
 console.log(fibanocci(34));
console.timeEnd("first");

console.time("sec");
 console.log(fibanocci(34));
console.timeEnd("sec");

console.log("----------");

let memFib = memoize(fibanocci); // cache and fn as closure

// let memProduct = memoize(getProduct); // different cache and fn


console.time("third");
 console.log(memFib(34));
console.timeEnd("third");

console.time("fourth");
 console.log(memFib(34));
console.timeEnd("fourth");