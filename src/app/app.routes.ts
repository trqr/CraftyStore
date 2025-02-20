import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '' , component: LandingPageComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'cart', component: CartComponent}
];
