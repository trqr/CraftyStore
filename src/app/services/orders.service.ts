import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "../models/order.model";


@Injectable({
    providedIn: 'root'
})

export class OrdersService {

    constructor(private CartServive: CartService){}

    private orders: Order[] = [];
    
    createOrder(customerMail: String, deliveryAddress: String){
        const newOrder = new Order(customerMail, deliveryAddress, this.CartServive.getCart(), this.CartServive.getTotalOrderPrice(), this.CartServive.getDeliveryOption());
        console.log(newOrder);
        this.orders.push(newOrder);
        this.saveOrdersToLocalStorage();
    }

    getOrders(){
        this.loadOrdersFromLocalStorage();
        return this.orders;
    }

    saveOrdersToLocalStorage() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
      }
    
      loadOrdersFromLocalStorage() {
        const orders = localStorage.getItem('orders');
        if (orders) {
          this.orders = JSON.parse(orders);
        }
      }

}