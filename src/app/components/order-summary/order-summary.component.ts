import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [DecimalPipe, DatePipe, FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
constructor(private CartService: CartService){}

  selectedDeliveryOption: string = "0";

  getDeliveryOption(){
    return +this.selectedDeliveryOption;
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