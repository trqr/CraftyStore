import { Customer } from "./customer.model";
import { Product } from "./product.model";

export interface Order {
    orderId?: number;
    customer: Customer;
    price: number;
    deliveryOption: number;
    cart: { product: Product, productPrice: number, quantity: number, order?: Order }[];
}