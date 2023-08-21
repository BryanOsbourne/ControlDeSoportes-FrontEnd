import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAsesoresComponent } from './tab-asesores.component';

describe('TabAsesoresComponent', () => {
  let component: TabAsesoresComponent;
  let fixture: ComponentFixture<TabAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabAsesoresComponent]
    });
    fixture = TestBed.createComponent(TabAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
