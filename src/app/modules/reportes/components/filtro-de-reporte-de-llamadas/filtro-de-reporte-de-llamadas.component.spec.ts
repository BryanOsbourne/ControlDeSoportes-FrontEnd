import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDeReporteDeLlamadasComponent } from './filtro-de-reporte-de-llamadas.component';

describe('FiltroDeReporteDeLlamadasComponent', () => {
  let component: FiltroDeReporteDeLlamadasComponent;
  let fixture: ComponentFixture<FiltroDeReporteDeLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroDeReporteDeLlamadasComponent]
    });
    fixture = TestBed.createComponent(FiltroDeReporteDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
