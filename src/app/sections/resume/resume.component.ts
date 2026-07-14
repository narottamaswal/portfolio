import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  driveUrl = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing';

  ngOnInit() {
    window.open(this.driveUrl, '_blank');
  }
}
