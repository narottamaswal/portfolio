import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() notes: Note[] = [];
}
