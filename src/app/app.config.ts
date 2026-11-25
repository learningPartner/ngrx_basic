import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { locationReducer } from './store/location.reducer';
import { provideEffects } from '@ngrx/effects';
import { LocationEffect } from './store/location-effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({counter: counterReducer,locations: locationReducer}),
    provideEffects(LocationEffect)
  ]
};
