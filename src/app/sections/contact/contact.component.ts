import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Personal } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private httpClient: HttpClient) {
  }

  @Input() personal!: Personal;

  year = new Date().getFullYear();
  submitted = false;

  form = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${this.form.name}`);
    const body = encodeURIComponent(`Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`);

    const payload= {
      access_key: '77f3aa47-f396-45d3-a2b0-d129b873d210',
      name: this.form.name,
      email: this.form.email,
      body: this.form.message
    }
    this.httpClient.post("https://api.web3forms.com/submit",payload).subscribe(()=>{});
    this.submitted = true;
  }
}
