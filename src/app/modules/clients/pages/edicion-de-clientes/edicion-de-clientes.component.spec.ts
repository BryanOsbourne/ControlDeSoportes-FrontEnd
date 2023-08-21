import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDeClientesComponent } from './edicion-de-clientes.component';

describe('EdicionDeClientesComponent', () => {
  let component: EdicionDeClientesComponent;
  let fixture: ComponentFixture<EdicionDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicionDeClientesComponent]
    });
    fixture = TestBed.createComponent(EdicionDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
