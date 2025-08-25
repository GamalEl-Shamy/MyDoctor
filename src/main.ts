import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { register } from 'swiper/element/bundle';
import { provideHttpClient } from '@angular/common/http';

register();

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
