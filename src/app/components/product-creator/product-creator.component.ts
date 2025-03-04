import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../header/header.component';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-creator',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, HeaderComponent, NgClass],
  templateUrl: './product-creator.component.html',
  styleUrl: './product-creator.component.scss'
})
export class ProductCreatorComponent {

  constructor(private http: HttpClient, private productsService: ProductsService, private toastr: ToastrService) {}

  productData = {
    name: '',
    description: '',
    imgUrl: '',
    price: 0,
    retailPrice: 0
  }

  productId: number = 0;

  isPopupVisible: boolean = false;

  addProduct(){
    this.http.post('http://localhost:8080/submit-product-data', this.productData)
    .subscribe(response => {
      console.log('Réponse du serveur:', response);
    });
  }

  deleteProduct(id: number){
    this.http.delete("http://localhost:8080/delete-product-data", {params: { id: id} }).subscribe(response => {
      console.log('Réponse du serveur:', response);
      this.showSuccess();
    });
    this.isPopupVisible = !this.isPopupVisible;
  }

  togglePopup(event: Event){
    event.preventDefault();
    this.isPopupVisible = !this.isPopupVisible;
  }

  showSuccess() {
    this.toastr.success('Article supprimé.', 'Opération réussie!');
  }
}
