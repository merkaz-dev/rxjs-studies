import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeConcSwitchComponent } from './merge-conc-switch.component';

describe('MergeConcSwitchComponent', () => {
  let component: MergeConcSwitchComponent;
  let fixture: ComponentFixture<MergeConcSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeConcSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeConcSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
