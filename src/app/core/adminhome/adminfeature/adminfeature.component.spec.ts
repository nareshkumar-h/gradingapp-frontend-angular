import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeatureComponent } from './adminfeature.component';

describe('AdminfeatureComponent', () => {
  let component: AdminfeatureComponent;
  let fixture: ComponentFixture<AdminfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
