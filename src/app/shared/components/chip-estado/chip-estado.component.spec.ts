import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipEstadoComponent } from './chip-estado.component';

describe('ChipEstadoComponent', () => {
  let component: ChipEstadoComponent;
  let fixture: ComponentFixture<ChipEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipEstadoComponent]
    });
    fixture = TestBed.createComponent(ChipEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
