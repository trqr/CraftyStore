import { Product } from "./product.model";

export class Cart {
    cart: Product[] = [];

    addToCart(product: Product) {
        this.cart.push(product);
    }

    removeFromCart(product: Product) {
        let index = this.cart.indexOf(product);
        this.cart.splice(index, 1);
    }
}