import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Field {

  private apiUrl = 'http://localhost:8080/api/fields';

  constructor(private http: HttpClient) {}

  getFields() {
    return this.http.get<any[]>(this.apiUrl);
  }
}