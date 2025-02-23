import { CartService } from "../services/cart.service";

export class Orders {
    orderId : String;
    customer : String;
    cart: CartService["cart"];
    price : number;
    deliveryOption: number;
    

    constructor(customer: String, cart: CartService["cart"], price: number, deliveryOption: number){
         this.orderId = crypto.randomUUID();
         this.customer = customer;
         this.cart = cart;
         this.price = price;
         this.deliveryOption = deliveryOption;
    }
}