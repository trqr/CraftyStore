export class Order {
    orderId! : number;
    customerId: number;
    price : number;
    deliveryOption: number;
    

    constructor(customerId: number, price: number, deliveryOption: number){
        this.customerId = customerId;
        this.price = price;
        this.deliveryOption = deliveryOption;
    }
}