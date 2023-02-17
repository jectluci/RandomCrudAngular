import { Component, inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
// import { ProductsResolverService } from 'src/app/resolvers/ products.resolvers.service';
// import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  // _productsServices = inject(ProductsService);
  route = inject(ActivatedRoute);
  products!: any;
  productsPagination!: any;
  length!: number;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;

  ngOnInit(): void {
    // with resolver
    this.route.snapshot.data['products'].subscribe((response: any) => {
      this.products = response;
      this.length = this.products.length;
      this.paginationMethod(this.pageIndex, this.pageSize);
    });
    // with direct call service
    // this._productsServices.getAllProducts().subscribe((response: any) => {
    //   this.products = response;
    //   this.length = this.products.length;
    //   this.paginationMethod(this.pageIndex, this.pageSize);
    // });
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const startPageCurrent = this.pageIndex * this.pageSize;
    const endPageCurrent = startPageCurrent + this.pageSize;
    this.paginationMethod(startPageCurrent, endPageCurrent);
  }
  paginationMethod(start: number, end: number) {
    this.productsPagination = this.products.slice(start, end);
  }
}
