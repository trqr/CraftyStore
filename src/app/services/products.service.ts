import { inject, Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { of, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private http = inject(HttpClient);
    
    constructor(private toastrService: ToastrService){}
  
    getProducts(): Observable<Product[]> {
      if (this.products.length == 0) {
       return this.http.get<Product[]>('http://localhost:8080/products').pipe(tap((data: Product[])=> {
        this.products = data;
       }));
      } else {
        return of(this.products)
      }
    }

    addProduct(productData: {}){
      this.http.post('http://localhost:8080/submit-product-data', productData, { responseType: 'text' })
      .subscribe(response => {
        console.log('Réponse du serveur:', response);
        this.toastrService.success('Produit ajouté', 'Ajout réussi');
          },
        error => {
        console.error(`Erreur lors de l'ajout du produit:`, error);
        this.toastrService.error(`Erreur lors de l'ajout du produit`, 'Echec');
      });
    }

    deleteProduct(id: number){
      this.http.delete("http://localhost:8080/delete-product-data", {params: { id: id}, responseType: 'text', observe: 'body' }).subscribe(response => {
        console.log('Réponse du serveur:', response);
        this.toastrService.success('Produit effacé', 'Suppression réussie');
          }, error => {
        console.error('Erreur lors de la suppression du produit:', error);
        this.toastrService.error('Erreur lors de la suppression du produit', 'Echec');
      });
    }


    private products: Product[] = [];
        //   new Product(
        //   "Cartes des animaux",
        //   "Lot de 24 cartes plastifiées: Animaux de la jungle...",
        //   "../assets/animaux.jpg",
        //   19.90,
        //   39.90
        // ),new Product(
        //   "10 Stickers BeBooh",
        //   "Lot de 10 stickers colorés et amusants pour décorer vos affaires. Disponible en Bebou Bebozor et Balboubsqdqsdqd dqdqdqdqdqddqdqdqdqsdqd",
        //   "../assets/animaux.jpg",
        //   8.90,
        //   14.99
        // ),new Product(
        //   "Pinceaux spécial photo",
        //   "Lot de pinceaux spécialement conçus pour la peinture sur photo. Idéal pour les artistes et les amateurs de bricolage.",
        //   "../assets/paint-brush.png",
        //   8.90,
        //   9.99
        // ),new Product(
        //   "Cadre à peinture",
        //   "Cadre en bois pour exposer vos œuvres d'art. Parfait pour les peintures et les photos.",
        //   "../assets/frame-2493923_1280.png",
        //   11.99,
        //   14.99
        // ),new Product(
        //   "Rose artificielle",
        //   "Rose artificielle réaliste pour la décoration intérieure. Parfaite pour ajouter une touche de nature à votre maison sans entretien.",
        //   "../assets/rose-3306242_1280.png",
        //   5.00,
        //   9.99
        // ),new Product(
        //   "Fleur artificielle",
        //   "Fleur artificielle réaliste pour la décoration intérieure. Idéale pour apporter une touche de verdure sans les contraintes de l'entretien.",
        //   "../assets/flower-4814753_1280.png",
        //   5.00,
        //   5.00
        // ),new Product(
        //   "Sticker Mouton pour TShirt",
        //   "Sticker mouton amusant pour personnaliser vos T-shirts. Facile à appliquer et durable.",
        //   "../assets/animals-3278317_1280.png",
        //   16.90,
        //   21.99
        // ),new Product(
        //   "Feuille d'érable séchée",
        //   "Feuille d'érable séchée pour la décoration. Parfaite pour ajouter une touche naturelle et automnale à votre intérieur.",
        //   "../assets/painting-8032889_1280.png",
        //   4.50,
        //   4.50
        // ),new Product(
        //   "NotePad for Art",
        //   "Superbe bloc notes pour dessinner et imaginer vos projets les plus fous.",
        //   "./assets/notepad-1558811_1280.jpg",
        //   8.90,
        //   9.90
        // ),new Product(
        //   "Pistolet à colle",
        //   "Pistolet à colle pratique pour tous vos projets de bricolage et de réparation. Facile à utiliser et compatible avec différents types de bâtons de colle.",
        //   "../assets/tool-159300_1280.png",
        //   18.00, 
        //   26.99
        // ),
        // new Product(
        //   "Boîte à bijoux artisanale",
        //   "Boîte à bijoux en bois sculptée à la main, idéale pour ranger vos trésors.",
        //   "../assets/jewelry-box-177116_1280.jpg",
        //   25.00,
        //   39.99
        // ),
        // new Product(
        //   "Bougies parfumées",
        //   "Lot de 3 bougies parfumées aux senteurs relaxantes pour créer une ambiance chaleureuse.",
        //   "../assets/candles-2993936_1280.jpg",
        //   15.00,
        //   24.99
        // ),
        // new Product(
        //   "Carnet de croquis",
        //   "Carnet de croquis avec papier épais, parfait pour les artistes et les amateurs de dessin.",
        //   "../assets/plans-1867745_1280.jpg",
        //   12.90,
        //   19.90
        // ),
        // new Product(
        //   "Tapis de souris artistique",
        //   "Tapis de souris avec des motifs artistiques uniques pour personnaliser votre espace de travail.",
        //   "../assets/pexels-chelsey-horne-2961698-4930664.jpg",
        //   9.90,
        //   14.90
        // ),
        // new Product(
        //   "Set de peinture aquarelle",
        //   "Set complet de peinture aquarelle avec pinceaux et palette, idéal pour les débutants et les professionnels.",
        //   "../assets/pexels-pavel-danilyuk-6925353.jpg",
        //   29.90,
        //   49.90
        // )

        getProduct(id: number): Product | undefined{
            const matchingProduct = this.products.find(product => product.id === id);
            return matchingProduct;
        }
}
