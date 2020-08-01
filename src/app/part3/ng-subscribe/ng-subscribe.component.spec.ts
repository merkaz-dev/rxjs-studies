import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSubscribeComponent } from './ng-subscribe.component';

describe('NgSubscribeComponent', () => {
  let component: NgSubscribeComponent;
  let fixture: ComponentFixture<NgSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
