import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: '' , component: LandingPageComponent}
];
