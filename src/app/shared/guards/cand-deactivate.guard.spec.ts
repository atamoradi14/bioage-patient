import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuard } from './cand-deactivate.guard';

describe('CandDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
