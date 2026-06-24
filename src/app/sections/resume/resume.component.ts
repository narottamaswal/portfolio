import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  pdfUrl: SafeResourceUrl = '';
  rawUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Append timestamp to bust any browser/CDN cache
    const cacheBust = new Date().getTime();
    // this.rawUrl = `assets/data/cv.pdf?v=${cacheBust}`;
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1mW0BHB8YATlbXfHqQZC2jTIxEbVUqsUx/view?usp=drive_link");
  }
}

