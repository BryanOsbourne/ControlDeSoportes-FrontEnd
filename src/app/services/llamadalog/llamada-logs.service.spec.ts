import { TestBed } from '@angular/core/testing';

import { LlamadaLogsService } from './llamada-logs.service';

describe('LlamadaLogsService', () => {
  let service: LlamadaLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
