import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeLlamadasComponent } from './reporte-de-llamadas.component';

describe('ReporteDeLlamadasComponent', () => {
  let component: ReporteDeLlamadasComponent;
  let fixture: ComponentFixture<ReporteDeLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeLlamadasComponent]
    });
    fixture = TestBed.createComponent(ReporteDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
