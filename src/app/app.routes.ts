import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProductCreatorComponent } from './components/product-creator/product-creator.component';

export const routes: Routes = [
    { path: '' , component: LandingPageComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'cart', component: CartComponent},
    { path: 'order', component: OrderConfirmationComponent},
    { path: 'orderslist', component: OrdersListComponent},
    { path: 'product-creator', component: ProductCreatorComponent}
];
    