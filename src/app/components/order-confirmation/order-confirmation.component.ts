import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  imports: [HeaderComponent, DecimalPipe, FormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent {
  
  cart: any;
  orders!: Order[]

  userEmail!: String;
  userAddress!: String;
  paymentMethod: String = "";
  

  constructor(private ProductsService: ProductsService, private CartService: CartService, private OrdersService: OrdersService){
    this.cart = this.CartService.getCart();
  }

  getProduct(id: number){
    return this.ProductsService.getProduct(id);
  }

  getTotalOrderPrice(){
    return this.CartService.getTotalOrderPrice();
  }

  getDeliveryOption(){
    return this.CartService.getDeliveryOption();
  }

  createOrder(customerMail: String, deliveryAddress: String){
    this.OrdersService.createOrder(customerMail, deliveryAddress); 
  }

  getOrders(){
    this.orders = this.OrdersService.getOrders();
  }

}

