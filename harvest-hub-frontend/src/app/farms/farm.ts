import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Farm {

  private apiUrl = 'http://localhost:8080/api/farms';

  constructor(private http: HttpClient) {}

  getFarms() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
