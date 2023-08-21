import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLlamadaLogComponent } from './filtro-llamada-log.component';

describe('FiltroLlamadaLogComponent', () => {
  let component: FiltroLlamadaLogComponent;
  let fixture: ComponentFixture<FiltroLlamadaLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroLlamadaLogComponent]
    });
    fixture = TestBed.createComponent(FiltroLlamadaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
