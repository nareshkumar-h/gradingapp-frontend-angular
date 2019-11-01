import { TestBed } from '@angular/core/testing';

import { StudentfeatureService } from './studentfeature.service';

describe('StudentfeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentfeatureService = TestBed.get(StudentfeatureService);
    expect(service).toBeTruthy();
  });
});
