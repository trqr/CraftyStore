import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    
        constructor(private toastrService: ToastrService, private http: HttpClient){}
    
        addUser(user: User){
            this.http.post('http://localhost:8080/submit-user-data', user, {responseType: 'text'})
            .subscribe((response: any) => {
                console.log('Réponse du serveur', response);
                this.toastrService.success('Utilisateur ajouté', 'Ajout réussi');
                },
                 error => {
            console.error(`Erreur lors de l'enregistrement de l'utilisateur:`, error);
            this.toastrService.error(`Erreur lors de l'enregistrement de l'utilisateur:`, 'Echec');
        });
        }
}