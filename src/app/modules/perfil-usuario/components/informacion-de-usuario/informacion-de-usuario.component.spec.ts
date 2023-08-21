import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDeUsuarioComponent } from './informacion-de-usuario.component';

describe('InformacionDeUsuarioComponent', () => {
  let component: InformacionDeUsuarioComponent;
  let fixture: ComponentFixture<InformacionDeUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionDeUsuarioComponent]
    });
    fixture = TestBed.createComponent(InformacionDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
