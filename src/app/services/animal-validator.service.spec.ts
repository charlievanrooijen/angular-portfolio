import { TestBed } from '@angular/core/testing';

import { AnimalValidatorService } from './animal-validator.service';

describe('AnimalValidatorService', () => {
  let service: AnimalValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
