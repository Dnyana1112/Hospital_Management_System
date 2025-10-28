import { TestBed } from '@angular/core/testing';

import { Doctorauthguard } from './doctorauthguard';

describe('Doctorauthguard', () => {
  let service: Doctorauthguard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctorauthguard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
