import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buffer1Component } from './buffer1.component';

describe('Buffer1Component', () => {
  let component: Buffer1Component;
  let fixture: ComponentFixture<Buffer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buffer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buffer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
