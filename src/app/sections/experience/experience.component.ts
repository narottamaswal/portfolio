import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experience: Experience[] = [];

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
