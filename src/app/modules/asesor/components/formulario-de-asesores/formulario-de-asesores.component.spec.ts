import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeAsesoresComponent } from './formulario-de-asesores.component';

describe('FormularioDeAsesoresComponent', () => {
  let component: FormularioDeAsesoresComponent;
  let fixture: ComponentFixture<FormularioDeAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeAsesoresComponent]
    });
    fixture = TestBed.createComponent(FormularioDeAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
