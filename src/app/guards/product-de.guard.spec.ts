import { TestBed } from '@angular/core/testing';

import { ProductDeGuard } from './product-de.guard';

describe('ProductDeGuard', () => {
  let guard: ProductDeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
