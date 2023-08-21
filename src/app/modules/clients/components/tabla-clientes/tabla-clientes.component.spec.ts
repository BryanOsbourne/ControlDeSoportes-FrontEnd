import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClientesComponent } from './tabla-clientes.component';

describe('TablaClientesComponent', () => {
  let component: TablaClientesComponent;
  let fixture: ComponentFixture<TablaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaClientesComponent]
    });
    fixture = TestBed.createComponent(TablaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
