import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineScoreRangeComponent } from './define-score-range.component';

describe('DefineScoreRangeComponent', () => {
  let component: DefineScoreRangeComponent;
  let fixture: ComponentFixture<DefineScoreRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineScoreRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineScoreRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
