import { TestBed } from '@angular/core/testing';

import { StudentLoginService } from './student-login.service';

describe('StudentLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentLoginService = TestBed.get(StudentLoginService);
    expect(service).toBeTruthy();
  });
});
