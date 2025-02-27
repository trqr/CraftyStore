import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { OrderSummaryComponent } from "../order-summary/order-summary.component";
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, OrderSummaryComponent, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService, private ProductsService: ProductsService){}

  cart: { id: String, quantity: number }[] = []
  products : Product[] = [];

  ngOnInit(): void {
    this.CartService.loadCartFromLocalStorage();
    this.cart = this.CartService.getCart();
    this.products = this.ProductsService.getProducts();
  }

  getProduct(id: String){
    return this.ProductsService.getProduct(id);
  }

  removeFromCart(id: String){
    this.cart = this.CartService.removeFromCart(id);
    this.CartService.saveCartToLocalStorage();
  }

  getSavings(id: String){
    return this.CartService.getSavings(id);
  }

}
