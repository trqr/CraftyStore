import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe, DatePipe, DecimalPipe, NgStyle, PercentPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-container',
  imports: [ PercentPipe, CurrencyPipe, DecimalPipe, NgStyle],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent{
  @Input()  product!: Product;

  constructor(private CartService: CartService){}

  sendDate: Date = new Date();

  cart = [{}];


  addToCart(product: Product) {
      this.cart = this.CartService.addToCart(product);
  }
}
