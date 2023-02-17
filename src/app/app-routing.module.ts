import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./componets/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./componets/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
