import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { DecimalPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-order-confirmation',
  imports: [HeaderComponent, DecimalPipe, FormsModule, MatFormFieldModule, MatInputModule, RouterLink, NgClass],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent {
  
  cart: any;

  userName!: String;
  userEmail!: String;
  userAddress!: String;
  paymentMethod: String = "";
  
  isClicked: boolean= false;

  constructor(private ProductsService: ProductsService, private CartService: CartService, private OrdersService: OrdersService, private customerService: CustomerService){
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

  addCustomer(){
    const newCustomer = new Customer(this.userName, this.userEmail, this.userAddress, this.paymentMethod, 0);
    this.customerService.addCustomer(newCustomer);
    this.isClicked = true;
  } 

  createOrder(){
    this.OrdersService.createOrder(this.customerService.newCustomer);
  }


}

