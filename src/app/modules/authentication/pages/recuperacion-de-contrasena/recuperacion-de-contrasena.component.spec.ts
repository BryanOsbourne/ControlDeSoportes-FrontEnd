import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionDeContrasenaComponent } from './recuperacion-de-contrasena.component';

describe('RecuperacionDeContrasenaComponent', () => {
  let component: RecuperacionDeContrasenaComponent;
  let fixture: ComponentFixture<RecuperacionDeContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacionDeContrasenaComponent]
    });
    fixture = TestBed.createComponent(RecuperacionDeContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
