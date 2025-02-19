import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductContainerComponent } from "../product-container/product-container.component";
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductContainerComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];

  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
