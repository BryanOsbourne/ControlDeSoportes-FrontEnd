import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeReporteDeLlamadasComponent } from './tabla-de-reporte-de-llamadas.component';

describe('TablaDeReporteDeLlamadasComponent', () => {
  let component: TablaDeReporteDeLlamadasComponent;
  let fixture: ComponentFixture<TablaDeReporteDeLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDeReporteDeLlamadasComponent]
    });
    fixture = TestBed.createComponent(TablaDeReporteDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
