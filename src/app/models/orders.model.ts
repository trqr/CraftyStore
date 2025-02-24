import { CartService } from "../services/cart.service";

export class Orders {
    orderId : String;
    customerMail : String;
    deliveryAddress : String;
    cart: CartService["cart"];
    price : number;
    deliveryOption: number;
    

    constructor(customerMail: String, deliveryAddress: String, cart: CartService["cart"], price: number, deliveryOption: number){
         this.orderId = crypto.randomUUID();
         this.customerMail = customerMail;
         this.deliveryAddress = deliveryAddress;
         this.cart = cart;
         this.price = price;
         this.deliveryOption = deliveryOption;
    }
}