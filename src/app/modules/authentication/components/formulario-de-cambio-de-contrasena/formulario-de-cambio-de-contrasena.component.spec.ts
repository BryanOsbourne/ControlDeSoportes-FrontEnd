import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeCambioDeContrasenaComponent } from './formulario-de-cambio-de-contrasena.component';

describe('FormularioDeCambioDeContrasenaComponent', () => {
  let component: FormularioDeCambioDeContrasenaComponent;
  let fixture: ComponentFixture<FormularioDeCambioDeContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeCambioDeContrasenaComponent]
    });
    fixture = TestBed.createComponent(FormularioDeCambioDeContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
