import { Injectable, inject } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "../models/order.model";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { of, tap } from "rxjs";
import { Customer } from "../models/customer.model";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    constructor(private CartServive: CartService, 
      private toastrService: ToastrService, 
      private http: HttpClient,
      private authService: AuthService
    ){}

    private orders: Order[] = [];

    // getOrders(): Observable<Order[]> {
    //   if (this.orders.length == 0) {
    //     return this.http.get<Order[]>('http://localhost:8080/orders').pipe(tap((data: Order[])=> {
    //     this.orders = data;
    //     }));
    //   } else {
    //     return of(this.orders)
    //   }
    // }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>('http://localhost:8080/orders').pipe(tap((data: Order[])=> {
        this.orders = data; }));}
    
    public createOrder(customer: Customer){
        const newOrder: Order = {
          customer: customer, 
          price: this.CartServive.getTotalOrderPrice(), 
          deliveryOption: this.CartServive.getDeliveryOption(),
          cart: this.CartServive.getCart()
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

    getUserOrders(): Observable<Order[]> {
      const token = this.authService.getJwtToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get<Order[]>('http://localhost:8080/userorders', { headers }).pipe(tap((data: Order[])=> {
      this.orders = data;
     }));}

}