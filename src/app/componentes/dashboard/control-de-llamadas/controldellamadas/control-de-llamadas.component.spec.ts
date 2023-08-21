import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeLlamadasComponent } from './control-de-llamadas.component';

describe('ControlDeLlamadasComponent', () => {
  let component: ControlDeLlamadasComponent;
  let fixture: ComponentFixture<ControlDeLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
