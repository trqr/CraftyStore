import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private toastrService: ToastrService, private http: HttpClient){}

    logIn(userData: {}){
        this.http.post('http://localhost:8080/login', userData, {responseType: 'text'})
        .subscribe((response: any) => {
            this.saveJwtToken(response);
            console.log('Réponse du serveur', response);
            this.toastrService.success('Mot de passe correct', 'Authentification réussie');
            },
             error => {
        console.error(`Erreur lors de l'enregistrement de l'authentification`, error);
        this.toastrService.error(`Erreur lors de l'authentification:`, 'Echec');
    });
    }

    saveJwtToken(token: string){
        localStorage.setItem("token", token);
    }

    getJwtToken(){
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        if (this.getJwtToken()){
            return true;
        }
        return false;
      }
    
    logout(): void {
        localStorage.removeItem('token');
    }
}