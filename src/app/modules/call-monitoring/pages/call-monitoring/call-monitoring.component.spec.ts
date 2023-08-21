import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMonitoringComponent } from './call-monitoring.component';

describe('CallMonitoringComponent', () => {
  let component: CallMonitoringComponent;
  let fixture: ComponentFixture<CallMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallMonitoringComponent]
    });
    fixture = TestBed.createComponent(CallMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
