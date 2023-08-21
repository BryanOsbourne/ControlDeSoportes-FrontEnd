import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeLlamadasPorClienteComponent } from './tabla-de-llamadas-por-cliente.component';

describe('TablaDeLlamadasPorClienteComponent', () => {
  let component: TablaDeLlamadasPorClienteComponent;
  let fixture: ComponentFixture<TablaDeLlamadasPorClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDeLlamadasPorClienteComponent]
    });
    fixture = TestBed.createComponent(TablaDeLlamadasPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
