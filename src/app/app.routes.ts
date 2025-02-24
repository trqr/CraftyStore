import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

export const routes: Routes = [
    { path: '' , component: LandingPageComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'cart', component: CartComponent},
    { path: 'order', component: OrderConfirmationComponent}
];
