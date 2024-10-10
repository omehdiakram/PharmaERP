import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';  // Ensure this points to your routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),  // Add routing here
    provideHttpClient()
  ]
};
