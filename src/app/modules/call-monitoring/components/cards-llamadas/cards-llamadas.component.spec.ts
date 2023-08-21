import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLlamadasComponent } from './cards-llamadas.component';

describe('CardsLlamadasComponent', () => {
  let component: CardsLlamadasComponent;
  let fixture: ComponentFixture<CardsLlamadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsLlamadasComponent]
    });
    fixture = TestBed.createComponent(CardsLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
