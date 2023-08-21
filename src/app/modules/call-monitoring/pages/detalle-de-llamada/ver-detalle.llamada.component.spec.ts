import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleLlamadaComponent } from './ver-detalle.llamada.component';

describe('VerDetalleLlamadaComponent', () => {
  let component: VerDetalleLlamadaComponent;
  let fixture: ComponentFixture<VerDetalleLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetalleLlamadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalleLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
