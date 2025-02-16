import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductsPanel } from './models/productsPanel.model';
import { ProductContainerComponent } from "./components/product-container/product-container.component";

@Component({
  selector: 'app-root',
  imports: [ProductContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'StickyBebou';

  animalsCard!: Product;

  ngOnInit(): void {

      this.animalsCard = new Product(
        "666",
        "Cartes plastifiées des animaux",
        "../assets/animaux.jpg",
        19
      );
  }
}
