import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // Smooth page transitions (Angular 17+)
      withViewTransitions(),
      // Restore scroll to top on navigation
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
  ],
};
