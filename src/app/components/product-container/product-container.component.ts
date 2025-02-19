import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-product-container',
  imports: [ PercentPipe, CurrencyPipe, DecimalPipe],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent{
  @Input() 
  product!: Product;

  sendDate: Date = new Date();

  cart: Product[] = [];

  addToCart(product: Product) {
      this.cart.push(product);
      console.log(this.cart)
  }

  removeFromCart(product: Product) {
      let index = this.cart.indexOf(product);
      this.cart.splice(index, 1);
  }
}
