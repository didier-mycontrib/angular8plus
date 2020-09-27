import { TestBed } from '@angular/core/testing';

import { ForMyLazyService } from './for-my-lazy.service';

describe('ForMyLazyService', () => {
  let service: ForMyLazyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForMyLazyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
