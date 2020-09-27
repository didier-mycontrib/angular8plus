import { TestBed } from '@angular/core/testing';

import { TimeCounterService } from './time-counter.service';

describe('TimeCounterService', () => {
  let service: TimeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
