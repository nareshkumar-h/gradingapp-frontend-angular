import { TestBed } from '@angular/core/testing';

import { AddFacultyService } from './add-faculty.service';

describe('AddFacultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFacultyService = TestBed.get(AddFacultyService);
    expect(service).toBeTruthy();
  });
});
