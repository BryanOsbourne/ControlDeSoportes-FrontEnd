import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDeLlamadasComponent } from './filtro-de-llamadas.component';

describe('FiltroDeLlamadasComponent', () => {
  let component: FiltroDeLlamadasComponent;
  let fixture: ComponentFixture<FiltroDeLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroDeLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
