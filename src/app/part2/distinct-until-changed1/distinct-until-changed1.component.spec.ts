import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChanged1Component } from './distinct-until-changed1.component';

describe('DistinctUntilChanged1Component', () => {
  let component: DistinctUntilChanged1Component;
  let fixture: ComponentFixture<DistinctUntilChanged1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilChanged1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilChanged1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
