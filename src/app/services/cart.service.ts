import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : [{}] = [{}]

  addToCart(product: Product){
    const alreadyInCart = find
    this.cart.push({
      id: product.id,
      quantity: 1
    }
      
    )
  }
}
