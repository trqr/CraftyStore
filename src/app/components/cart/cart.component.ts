import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService, private ProductsService: ProductsService){}

  cart: { id: String, quantity: number }[] = []

  ngOnInit(): void {
    this.cart = this.CartService.getCart();
    console.log(this.cart);
  }

  getProduct(id: String){
    return this.ProductsService.getProduct(id);
  }

  removeFromCart(id: String){
    this.cart = this.CartService.removeFromCart(id);
    console.log(this.cart);
  }
}
