import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayWhen2Component } from './delay-when2.component';

describe('DelayWhen2Component', () => {
  let component: DelayWhen2Component;
  let fixture: ComponentFixture<DelayWhen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayWhen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayWhen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
