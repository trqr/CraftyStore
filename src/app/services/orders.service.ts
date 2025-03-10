import { Injectable, inject } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "../models/order.model";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { of, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    constructor(private CartServive: CartService, private toastrService: ToastrService, private http: HttpClient){}

    private orders: Order[] = [];
    
    createOrder(customerId: number){
        const newOrder = new Order(customerId,this.CartServive.getTotalOrderPrice(), this.CartServive.getDeliveryOption());
        this.http.post('http://localhost:8080/create-order', newOrder, { responseType: 'text' })
      .subscribe(response => {
        console.log('Réponse du serveur:', response);
        this.toastrService.success('Votre commande est en attente','Opération réussie');
          }, error => {
        console.error(`Erreur lors de l'ajout de la commande:`, error);
        this.toastrService.error(`Erreur lors de l'ajout de la commande`, 'Echec');
      });
    }

    getOrders(){
        this.loadOrdersFromLocalStorage();
        return this.orders;
    }

    saveOrdersToLocalStorage() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
      }
    
      loadOrdersFromLocalStorage() {
        const orders = localStorage.getItem('orders');
        if (orders) {
          this.orders = JSON.parse(orders);
        }
      }



}