import { TestBed } from '@angular/core/testing';

import { AddMarksService } from './add-marks.service';

describe('AddMarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMarksService = TestBed.get(AddMarksService);
    expect(service).toBeTruthy();
  });
});
