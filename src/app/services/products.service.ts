import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Product[] = [
          new Product(
          "Cartes des animaux",
          "Lot de 24 cartes plastifiées: Animaux de la jungle...",
          "../assets/animaux.jpg",
          1990,
          3990
        ),new Product(
          "10 Stickers BeBooh",
          "Lot de 10 stickers colorés et amusants pour décorer vos affaires. Disponible en Bebou Bebozor et Balboubsqdqsdqd dqdqdqdqdqddqdqdqdqsdqd",
          "../assets/animaux.jpg",
          890,
          1499
        ),new Product(
          "Pinceaux spécial photo",
          "Lot de pinceaux spécialement conçus pour la peinture sur photo. Idéal pour les artistes et les amateurs de bricolage.",
          "../assets/paint-brush.png",
          890,
          999
        ),new Product(
          "Cadre à peinture",
          "Cadre en bois pour exposer vos œuvres d'art. Parfait pour les peintures et les photos.",
          "../assets/frame-2493923_1280.png",
          1199,
          1499
        ),new Product(
          "Rose artificielle",
          "Rose artificielle réaliste pour la décoration intérieure. Parfaite pour ajouter une touche de nature à votre maison sans entretien.",
          "../assets/rose-3306242_1280.png",
          500,
          999
        ),new Product(
          "Fleur artificielle",
          "Fleur artificielle réaliste pour la décoration intérieure. Idéale pour apporter une touche de verdure sans les contraintes de l'entretien.",
          "../assets/flower-4814753_1280.png",
          500,
          500
        )];

        getProducts(): Product[] {
            return this.products;
        }

        getProduct(id: String) {
            const matchingProduct = this.products.find(product => product.id === id);
            return matchingProduct;
        }
}