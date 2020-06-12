import { TestBed } from '@angular/core/testing';

import { CombineLatestService } from './combine-latest.service';

describe('CombineLatestService', () => {
  let service: CombineLatestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombineLatestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
