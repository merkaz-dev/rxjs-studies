import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectObsComponent } from './connect-obs.component';

describe('ConnectObsComponent', () => {
  let component: ConnectObsComponent;
  let fixture: ComponentFixture<ConnectObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
