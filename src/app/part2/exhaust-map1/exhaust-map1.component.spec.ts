import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMap1Component } from './exhaust-map1.component';

describe('ExhaustMap1Component', () => {
  let component: ExhaustMap1Component;
  let fixture: ComponentFixture<ExhaustMap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhaustMap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
