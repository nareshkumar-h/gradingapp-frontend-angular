import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradewiselistComponent } from './gradewiselist.component';

describe('GradewiselistComponent', () => {
  let component: GradewiselistComponent;
  let fixture: ComponentFixture<GradewiselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradewiselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradewiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
