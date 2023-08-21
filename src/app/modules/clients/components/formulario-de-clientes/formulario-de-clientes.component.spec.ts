import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeClientesComponent } from './formulario-de-clientes.component';

describe('FormularioDeClientesComponent', () => {
  let component: FormularioDeClientesComponent;
  let fixture: ComponentFixture<FormularioDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeClientesComponent]
    });
    fixture = TestBed.createComponent(FormularioDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
