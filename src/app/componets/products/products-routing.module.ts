import { Routes } from '@angular/router';
import { ProductsResolverService } from 'src/app/resolvers/ products.resolvers.service';
import { DetailsProductComponent } from './componets/details-product/details-product.component';
import { ListProductsComponent } from './componets/list-products/list-products.component';

export const ProductsRoutingModule: Routes = [
  { path: '', component: ListProductsComponent, resolve:{products: ProductsResolverService} },
  { path: ':id', component: DetailsProductComponent },
];
