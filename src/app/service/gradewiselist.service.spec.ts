import { TestBed } from '@angular/core/testing';

import { GradewiselistService } from './gradewiselist.service';

describe('GradewiselistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradewiselistService = TestBed.get(GradewiselistService);
    expect(service).toBeTruthy();
  });
});
