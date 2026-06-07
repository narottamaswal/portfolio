import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills: SkillCategory[] = [];
}
