export class Customer {
    customerName: String;
    customerMail: String;
    customerAddress: String;
    paymentMethod: String;
    numberOfOrders: number;
    customerId!: number;

    constructor(custmerName: String, customerMail: String, customerAddress: String, paymentMethod: String, numberOfOrders: number){
        this.customerName = custmerName;
        this.customerMail = customerMail;
        this.customerAddress = customerAddress;
        this.paymentMethod = paymentMethod;
        this.numberOfOrders = numberOfOrders;
    }
}