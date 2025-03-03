import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductContainerComponent } from "../product-container/product-container.component";
import { ProductsService } from '../../services/products.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [ProductContainerComponent, HeaderComponent ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products! : Product[];

  constructor(private ProductsService: ProductsService){}
  
  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
