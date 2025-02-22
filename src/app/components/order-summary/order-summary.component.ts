import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [DecimalPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
constructor(private CartService: CartService){}

  getCartQuantity(){
    return this.CartService.getCartQuantity();
  }

  getTotalOrderPrice(){
    return this.CartService.getTotalOrderPrice();
  }
  
  getTotalSavings(){
    return this.CartService.getTotalSavings();
  }
}