import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category!: Category;
  showModalCategory: boolean = false;

  showModal(): void {
    this.showModalCategory = !this.showModalCategory;
  }
}
