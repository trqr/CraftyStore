import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  imports: [DecimalPipe, DatePipe, FormsModule, RouterLink],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
constructor(private CartService: CartService){}

   selectedDeliveryOption: String = "0";

   setDeliveryOption(selectedDeliveryOption: String){
    this.CartService.setDeliveryOption(selectedDeliveryOption);
   }

  currentDate : Date = new Date;

  getNextDay(nbJour: number){
    return new Date(this.currentDate.getTime()+(nbJour*24*3600000));
  }


  getCart(){
    return this.CartService.getCart();
  }

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