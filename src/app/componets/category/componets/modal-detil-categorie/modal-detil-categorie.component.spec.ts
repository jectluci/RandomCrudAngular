import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetilCategorieComponent } from './modal-detil-categorie.component';

describe('ModalDetilCategorieComponent', () => {
  let component: ModalDetilCategorieComponent;
  let fixture: ComponentFixture<ModalDetilCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetilCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetilCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
