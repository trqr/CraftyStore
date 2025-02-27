export class Order {
    orderId : String;
    customerMail : String;
    deliveryAddress : String;
    cart: {id: String, quantity: number}[];
    price : number;
    deliveryOption: number;
    

    constructor(customerMail: String, deliveryAddress: String, cart: {id: String, quantity: number}[], price: number, deliveryOption: number){
         this.orderId = crypto.randomUUID();
         this.customerMail = customerMail;
         this.deliveryAddress = deliveryAddress;
         this.cart = cart;
         this.price = price;
         this.deliveryOption = deliveryOption;
    }
}