import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAllComponent } from './switch-all.component';

describe('SwitchAllComponent', () => {
  let component: SwitchAllComponent;
  let fixture: ComponentFixture<SwitchAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
