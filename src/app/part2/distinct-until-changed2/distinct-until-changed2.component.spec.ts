import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChanged2Component } from './distinct-until-changed2.component';

describe('DistinctUntilChanged2Component', () => {
  let component: DistinctUntilChanged2Component;
  let fixture: ComponentFixture<DistinctUntilChanged2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilChanged2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilChanged2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
