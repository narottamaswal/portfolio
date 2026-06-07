import { Component, Input, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Project } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];

  private document = inject(DOCUMENT);
  private fallbackImage = 'https://placehold.co/600x280/1f2937/a5b4fc?text=Project+Preview';

  resolveImagePath(image?: string): string {
    if (!image) {
      return this.fallbackImage;
    }

    // Accept external URLs as-is.
    if (/^(https?:)?\/\//i.test(image) || image.startsWith('data:')) {
      return image;
    }

    // Tolerate typo from content data: 'asssets/...'.
    const normalized = image.replace(/^asssets\//i, 'assets/').replace(/^\.\//, '');
    return new URL(normalized, this.document.baseURI).toString();
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.fallbackImage;
  }
}
