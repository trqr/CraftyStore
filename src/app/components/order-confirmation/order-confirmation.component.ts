import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  imports: [HeaderComponent],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent {
  
  cart: any;

  constructor(private ProductsService: ProductsService, private CartService: CartService){
    this.cart = this.CartService.getCart();
  }

  getProduct(id: string){
    return this.ProductsService.getProduct(id);
  }

  getTotalOrderPrice(){
    return this.CartService.getTotalOrderPrice();
  }

  getDeliveryOption(){
    return this.CartService.getDeliveryOption();
  }
}
