import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayWhen1Component } from './delay-when1.component';

describe('DelayWhen1Component', () => {
  let component: DelayWhen1Component;
  let fixture: ComponentFixture<DelayWhen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayWhen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayWhen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
