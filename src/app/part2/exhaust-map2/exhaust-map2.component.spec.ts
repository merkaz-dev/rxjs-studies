import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMap2Component } from './exhaust-map2.component';

describe('ExhaustMap2Component', () => {
  let component: ExhaustMap2Component;
  let fixture: ComponentFixture<ExhaustMap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhaustMap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustMap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
