import { TestBed } from '@angular/core/testing';

import { SupportService } from './support.service';

describe('LlamadasService', () => {
  let service: SupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
