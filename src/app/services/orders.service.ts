import { Injectable, inject } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "../models/order.model";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { of, tap } from "rxjs";
import { Customer } from "../models/customer.model";


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    constructor(private CartServive: CartService, private toastrService: ToastrService, private http: HttpClient){}

    private orders: Order[] = [];

    getOrders(): Observable<Order[]> {
      if (this.orders.length == 0) {
        return this.http.get<Order[]>('http://localhost:8080/orders').pipe(tap((data: Order[])=> {
        this.orders = data;
        }));
      } else {
        return of(this.orders)
      }
    }
    
    createOrder(customer: Customer){
        const newOrder: Order = {
          customer: customer, 
          price: this.CartServive.getTotalOrderPrice(), 
          deliveryOption: this.CartServive.getDeliveryOption()
        };
        this.http.post('http://localhost:8080/create-order', newOrder, { responseType: 'text' })
      .subscribe(response => {
        console.log('Réponse du serveur:', response);
        this.toastrService.success('Votre commande est en attente','Opération réussie');
        this.CartServive.clearCart();
          }, error => {
        console.error(`Erreur lors de l'ajout de la commande:`, error);
        this.toastrService.error(`Erreur lors de l'ajout de la commande`, 'Echec');
      });
    }

}