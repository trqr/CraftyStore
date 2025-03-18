import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-container',
  imports: [ PercentPipe, CurrencyPipe, DecimalPipe, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent{
  @Input()  product!: Product;

  constructor(private CartService: CartService){}

  sendDate: Date = new Date();

  selectedQuantity: number = 1;
  cart = [{}];


  addToCart(product: Product, quantity: number) {
      this.cart = this.CartService.addToCart(product, quantity);
  }
}
