import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './componets/list-products/list-products.component';
import { ProductComponent } from './componets/product/product.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailsProductComponent } from './componets/details-product/details-product.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../shared/spinner/spinner.interceptor';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductComponent,
    DetailsProductComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule.forChild(ProductsRoutingModule),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
})
export class ProductsModule {}
