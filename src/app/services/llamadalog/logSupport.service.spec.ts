import { TestBed } from '@angular/core/testing';

import { LogsSupportService } from './logSupport.service';

describe('LlamadaLogsService', () => {
  let service: LogsSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
