import { ApplicationConfig } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { HomeComponent } from './home/home.component';

const DRIVE_RESUME_URL = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      {
        path: 'resume',
        canActivate: [() => {
          window.open(DRIVE_RESUME_URL, '_blank');
          inject(Router).navigate(['/']);
          return false;
        }],
        component: HomeComponent
      },
      { path: '**', redirectTo: '' }
    ]),
    provideHttpClient()
  ]
};
