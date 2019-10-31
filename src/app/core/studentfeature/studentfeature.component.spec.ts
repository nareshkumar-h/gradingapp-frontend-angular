import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeatureComponent } from './studentfeature.component';

describe('StudentfeatureComponent', () => {
  let component: StudentfeatureComponent;
  let fixture: ComponentFixture<StudentfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
