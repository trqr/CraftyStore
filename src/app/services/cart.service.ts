import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: { id: String, quantity: number }[] = []

  addToCart(product: Product){
    const alreadyInCart = this.cart.find(item => item.id === product.id);
    if (alreadyInCart) {
      alreadyInCart.quantity++;
    } else {
      this.cart.push({
        id: product.id,
        quantity: 1
      });
    };
    return this.cart;
  }

  removeFromCart(id: String){
    const itemIndex = this.cart.findIndex(item => item.id === id);
    // console.log(itemIndex, this.cart);
    if (this.cart[itemIndex].quantity > 1) {
      this.cart[itemIndex].quantity--;
    } else {
      this.cart.splice(itemIndex, 1);
    }
    return this.cart;
  }

  getCart(){ 
    return this.cart;
  }
}

