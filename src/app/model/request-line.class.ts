import { Request } from './request.class';
import { Product } from './product.class';

export class RequestLine {
    id: number;
    requestId: number;
    request: Request;
    productId: number;
    product: Product;
    quantity: number;
    price: number;

    constructor( id:number = 0, requestId: number = 0, request: Request = new Request(), 
                productId: number = 0, product: Product = new Product(), quantity: number = 0,
                price: number = 0) {

                    this.id = id;
                    this.requestId = requestId;
                    this.request =  request;
                    this.productId = productId;
                    this.product = product;
                    this.quantity = quantity;
                    this.price = price;

                }
}
