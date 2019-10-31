import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwiselistComponent } from './subwiselist.component';

describe('SubwiselistComponent', () => {
  let component: SubwiselistComponent;
  let fixture: ComponentFixture<SubwiselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwiselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
