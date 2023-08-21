import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeLlamadasComponent } from './tabla-de-llamadas.component';

describe('TablaDeLlamadasComponent', () => {
  let component: TablaDeLlamadasComponent;
  let fixture: ComponentFixture<TablaDeLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDeLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
