import { inject, Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ToastrService } from "ngx-toastr";
import { Customer } from "../models/customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    
    newCustomer!: Customer;

    constructor(private toastrService: ToastrService, private http: HttpClient){}

    addCustomer(customer: Customer): any{
        this.http.post('http://localhost:8080/submit-customer-data', customer)
        .subscribe((response: any) => {
            console.log('Réponse du serveur', response);
            this.toastrService.success('Client ajouté', 'Ajout réussi');
            this.newCustomer = response as Customer;
            },
             error => {
        console.error(`Erreur lors de l'enregistrement du client:`, error);
        this.toastrService.error(`Erreur lors de l'enregistrement du client:`, 'Echec');
    });
    }
}