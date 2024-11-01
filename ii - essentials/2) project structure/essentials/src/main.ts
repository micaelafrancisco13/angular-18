import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// the ./app/app.component points to the src/app/app.component.ts file

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
