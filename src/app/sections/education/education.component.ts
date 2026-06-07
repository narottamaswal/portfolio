import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input() education: Education[] = [];

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
