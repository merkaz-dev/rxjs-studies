import { TestBed } from '@angular/core/testing';

import { NestedJoinService } from './services/nested-join.service';

describe('NestedJoinService', () => {
  let service: NestedJoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedJoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
