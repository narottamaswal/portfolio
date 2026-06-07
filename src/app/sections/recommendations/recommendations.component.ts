import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  @Input() recommendations: Recommendation[] = [];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
}
