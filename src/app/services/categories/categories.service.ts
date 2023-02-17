import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  http = inject(HttpClient);
  constructor() {}
  getAllCategories(): Observable<any> {
    return this.http.get('https://api.escuelajs.co/api/v1/categories');
  }
}
