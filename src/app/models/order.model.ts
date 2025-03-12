import { Customer } from "./customer.model";

export interface Order {
    orderId?: number;
    customer: Customer;
    price: number;
    deliveryOption: number;
    
}