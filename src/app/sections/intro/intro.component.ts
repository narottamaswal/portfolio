import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personal } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit, OnDestroy {
  @Input() personal!: Personal;

  currentIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  get carouselImages(): string[] {
    if (this.personal?.heroImages?.length) return this.personal.heroImages;
    if (this.personal?.heroImage) return [this.personal.heroImage];
    return [];
  }

  ngOnInit(): void {
    if (this.carouselImages.length > 1) {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
      }, 3500);
    }
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
