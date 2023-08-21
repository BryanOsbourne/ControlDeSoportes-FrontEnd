import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLlamadaComponent } from './agregar-llamada.component';

describe('AgregarLlamadaComponent', () => {
  let component: AgregarLlamadaComponent;
  let fixture: ComponentFixture<AgregarLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarLlamadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
