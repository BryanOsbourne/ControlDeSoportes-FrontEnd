import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeConfirmacionComponent } from './dialog-de-confirmacion.component';

describe('DialogDeConfirmacionComponent', () => {
  let component: DialogDeConfirmacionComponent;
  let fixture: ComponentFixture<DialogDeConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
