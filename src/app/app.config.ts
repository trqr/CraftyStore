import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), { provide: LOCALE_ID, useValue: "fr-FR"},provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi()), provideToastr(),provideAnimations()]
};
