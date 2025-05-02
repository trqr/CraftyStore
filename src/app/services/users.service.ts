import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "./auth.service";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    
        constructor(
            private toastrService: ToastrService,
            private http: HttpClient,
            private authService: AuthService
            ){}
    
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

        getUserInfo(): Observable<User>{
            const token = this.authService.getJwtToken();
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

            return this.http.get<User>('http://localhost:8080/get-user-info', { headers }).pipe(tap((data: User) => data))
        }
}