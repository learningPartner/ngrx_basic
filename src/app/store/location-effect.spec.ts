import { TestBed } from '@angular/core/testing';
import { LocationEffect } from './location-effect';

describe('LocationEffect', () => {
  let service: LocationEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
