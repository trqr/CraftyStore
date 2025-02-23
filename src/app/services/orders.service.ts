import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";


@Injectable({
    providedIn: 'root'
})

export class OrdersService {

    constructor(private CartServive: CartService){}

    
    
}