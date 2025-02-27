import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private ProductsService: ProductsService){}

  private cart: { id: String, quantity: number}[] = []

  deliveryOption : number = 0;

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

  getCartQuantity(){
    let quantity = 0;
    this.cart.forEach(product => {
      quantity += product.quantity;
    })
    return quantity;
  };

  getSavings(id: String){
    let product = this.ProductsService.getProduct(id);
    let quantity = this.cart.find(item => item.id === id)?.quantity ?? 0;
    let savings = ((product?.retailPrice ?? 0) - (product?.price ?? 0)) * quantity;
    return savings;
  }

  getTotalOrderPrice(){
    let total = 0;
    this.cart.forEach((product) => {
      let productPrice = this.ProductsService.getProduct(product.id)?.price ?? 0;
      let quantity = product.quantity;
      total += productPrice * quantity;
    });
    return total;
  }
  
  getTotalSavings(){
    let total = 0
    this.cart.forEach((product) => {
      total += this.getSavings(product.id);
    });
    return total;
  }

  setDeliveryOption(deliveryCost: String){
    this.deliveryOption = +deliveryCost;
  }

  getDeliveryOption(){
    return this.deliveryOption;
  }

  
  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loadCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }
}

