import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);

  private apiUrl = 'assets/data/portfolio2.json';

  getData(): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.apiUrl);
  }
}
