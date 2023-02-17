import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products/products.service';

@Injectable({ providedIn: 'root' })
export class ProductsResolverService implements Resolve<any> {
  _productsService = inject(ProductsService);
  products!: any;

  resolve(): Observable<any> {
    return of(this._productsService.getAllProducts());
  }
}
