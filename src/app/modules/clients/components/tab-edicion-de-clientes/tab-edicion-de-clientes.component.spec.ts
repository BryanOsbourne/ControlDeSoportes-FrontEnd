import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEdicionDeClientesComponent } from './tab-edicion-de-clientes.component';

describe('TabEdicionDeClientesComponent', () => {
  let component: TabEdicionDeClientesComponent;
  let fixture: ComponentFixture<TabEdicionDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabEdicionDeClientesComponent]
    });
    fixture = TestBed.createComponent(TabEdicionDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
