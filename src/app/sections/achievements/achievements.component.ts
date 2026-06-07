import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Achievement } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  @Input() achievements: Achievement[] = [];
}
