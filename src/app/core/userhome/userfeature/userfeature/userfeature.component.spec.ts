import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeatureComponent } from './userfeature.component';

describe('UserfeatureComponent', () => {
  let component: UserfeatureComponent;
  let fixture: ComponentFixture<UserfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
