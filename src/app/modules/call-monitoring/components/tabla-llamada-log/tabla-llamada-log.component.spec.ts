import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLlamadaLogComponent } from './tabla-llamada-log.component';

describe('TablaLlamadaLogComponent', () => {
  let component: TablaLlamadaLogComponent;
  let fixture: ComponentFixture<TablaLlamadaLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaLlamadaLogComponent]
    });
    fixture = TestBed.createComponent(TablaLlamadaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
