import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnObsComponent } from './own-obs.component';

describe('OwnObsComponent', () => {
  let component: OwnObsComponent;
  let fixture: ComponentFixture<OwnObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
