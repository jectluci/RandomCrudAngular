import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detil-categorie',
  templateUrl: './modal-detil-categorie.component.html',
  styleUrls: ['./modal-detil-categorie.component.scss'],
})
export class ModalDetilCategorieComponent {
  @Input() showButton: boolean = true;
  @Input() showModal: boolean = false;

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
