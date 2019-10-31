import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificgradeComponent } from './specificgrade.component';

describe('SpecificgradeComponent', () => {
  let component: SpecificgradeComponent;
  let fixture: ComponentFixture<SpecificgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
