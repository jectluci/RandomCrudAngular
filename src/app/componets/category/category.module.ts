import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './componets/list-category/list-category.component';
import { CategoryComponent } from './componets/category/category.component';
import { ModalDetilCategorieComponent } from './componets/modal-detil-categorie/modal-detil-categorie.component';


@NgModule({
  declarations: [
    ListCategoryComponent,
    CategoryComponent,
    ModalDetilCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
