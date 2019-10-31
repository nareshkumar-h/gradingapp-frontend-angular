import { TestBed } from '@angular/core/testing';

import { SpecificgradeService } from './specificgrade.service';

describe('SpecificgradeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecificgradeService = TestBed.get(SpecificgradeService);
    expect(service).toBeTruthy();
  });
});
