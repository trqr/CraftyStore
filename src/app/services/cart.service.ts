import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private ProductsService: ProductsService, private toastrService: ToastrService){}

  private cart: { product: Product, productPrice: number, quantity: number, order?: Order}[] = []

  deliveryOption : number = 0;

  addToCart(product: Product){
    console.log(this.cart)
    const alreadyInCart = this.cart.find(item => item.product.id === product.id);
    if (alreadyInCart) {
      alreadyInCart.quantity++;
    } else {
      this.cart.push({
        product: product,
        productPrice: product.price,
        quantity: 1
      });
    };
    this.toastrService.success('Produit ajouté au panier', 'Opération réussie')
    this.saveCartToLocalStorage();
    return this.cart;
  }

  removeFromCart(id: number){
    this.getCart();
    const itemIndex = this.cart.findIndex(item => item.product.id === id);
    if (itemIndex !== -1) {
      if (this.cart[itemIndex].quantity > 1) {
        this.cart[itemIndex].quantity--;
      } else {
        this.cart.splice(itemIndex, 1);
      }
      this.saveCartToLocalStorage();
    }
    return this.cart;
  }

  getCart(){ 
    this.loadCartFromLocalStorage()
    return this.cart;
  }

  getCartQuantity(){
    let quantity = 0;
    this.cart.forEach(product => {
      quantity += product.quantity;
    })
    return quantity;
  };

  getSavings(id: number){
    let product = this.ProductsService.getProduct(id);
    let quantity = this.cart.find(item => item.product.id === id)?.quantity ?? 0;
    let savings = ((product?.retailPrice ?? 0) - (product?.price ?? 0)) * quantity;
    return savings;
  }

  getTotalOrderPrice(){
    let total = 0;
    this.cart.forEach((product) => {
      total += product.productPrice * product.quantity;
    });
    return total;
  }
  
  getTotalSavings(){
    let total = 0
    this.cart.forEach((product) => {
      total += this.getSavings(product.product.id!);
    });
    return total;
  }

  setDeliveryOption(deliveryCost: String){
    this.deliveryOption = +deliveryCost;
  }

  getDeliveryOption(){
    return this.deliveryOption;
  }

  clearCart(){
    this.cart = [];
    this.saveCartToLocalStorage();
    return this.cart;
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

