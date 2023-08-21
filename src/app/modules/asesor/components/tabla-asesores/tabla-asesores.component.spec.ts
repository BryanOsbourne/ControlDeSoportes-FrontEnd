import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsesoresComponent } from './tabla-asesores.component';

describe('TablaAsesoresComponent', () => {
  let component: TablaAsesoresComponent;
  let fixture: ComponentFixture<TablaAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAsesoresComponent]
    });
    fixture = TestBed.createComponent(TablaAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
