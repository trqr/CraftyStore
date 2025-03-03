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

  products!: Product[];
  cart: { id: number, quantity: number }[] = []

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.cart = this.CartService.getCart();
  }

  getProduct(id: number): Product{
    return this.ProductsService.getProduct(id)!;
  }

  removeFromCart(id: number){
    this.cart = this.CartService.removeFromCart(id);
  }

  getSavings(id: number){
    return this.CartService.getSavings(id);
  }

}
