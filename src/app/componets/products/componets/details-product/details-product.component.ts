import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
})
export class DetailsProductComponent implements OnInit {
  route = inject(ActivatedRoute);
  _serviceProducts = inject(ProductsService);
  product!: any;
  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.getProduct(paramId);
  }
  getProduct(id: number): void {
    this._serviceProducts.getSingleProduct(id).subscribe((response: any) => {
      this.product = response;
    });
  }
}
