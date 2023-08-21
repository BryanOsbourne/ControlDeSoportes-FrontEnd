import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLlamadaLogComponent } from './dialog-llamada-log.component';

describe('DialogLlamadaLogComponent', () => {
  let component: DialogLlamadaLogComponent;
  let fixture: ComponentFixture<DialogLlamadaLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLlamadaLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLlamadaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
