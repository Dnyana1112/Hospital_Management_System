import { TestBed } from '@angular/core/testing';

import { Adauth } from './adauth';

describe('Adauth', () => {
  let service: Adauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adauth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
