import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeLlamadasComponent } from './formulario-de-llamadas.component';

describe('FormularioDeLlamadasComponent', () => {
  let component: FormularioDeLlamadasComponent;
  let fixture: ComponentFixture<FormularioDeLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeLlamadasComponent]
    });
    fixture = TestBed.createComponent(FormularioDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
