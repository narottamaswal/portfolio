import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './sections/resume/resume.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: '**', redirectTo: '' }
    ]),
    provideHttpClient()
  ]
};
