import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  router = inject(Router);

  ngOnInit(): void {}

  redirectDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
