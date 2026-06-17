import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../models/portfolio.model';
import { NavbarComponent } from '../sections/navbar/navbar.component';
import { IntroComponent } from '../sections/intro/intro.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { EducationComponent } from '../sections/education/education.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { AchievementsComponent } from '../sections/achievements/achievements.component';
import { RecommendationsComponent } from '../sections/recommendations/recommendations.component';
import { NotesComponent } from '../sections/notes/notes.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    NavbarComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    AchievementsComponent,
    RecommendationsComponent,
    NotesComponent,
    ContactComponent
  ]
})
export class HomeComponent implements OnInit {
  private portfolioService = inject(PortfolioService);

  portfolio: Portfolio | null = null;
  loading = true;
  error = false;

  ngOnInit() {
    this.portfolioService.getData().subscribe({
      next: (data) => {
        this.portfolio = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }
}

