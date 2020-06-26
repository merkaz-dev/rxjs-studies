import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Queque2Component } from './queque2.component';

describe('Queque2Component', () => {
  let component: Queque2Component;
  let fixture: ComponentFixture<Queque2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Queque2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Queque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
