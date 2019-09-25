import { Request } from './request.class';
import { Product } from './product.class';

export class RequestLine {
    id: number;
    requestId: number;
    request: Request;
    productId: number;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
        this.requestId = 0;
        this.productId = 0;
        this.quantity = 1;
    }
}
