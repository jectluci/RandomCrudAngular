import { Component, inject, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  _categoryService = inject(CategoriesService);
  categories!: Category[];

  ngOnInit(): void {
    this._categoryService.getAllCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
