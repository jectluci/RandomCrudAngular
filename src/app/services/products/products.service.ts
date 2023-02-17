import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  constructor() {}

  getAllProducts(): Observable<any> {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }
  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
