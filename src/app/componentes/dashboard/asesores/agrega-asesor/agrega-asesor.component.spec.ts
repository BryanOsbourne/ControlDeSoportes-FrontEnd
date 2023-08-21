import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaAsesorComponent } from './agrega-asesor.component';

describe('AgregaAsesorComponent', () => {
  let component: AgregaAsesorComponent;
  let fixture: ComponentFixture<AgregaAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
