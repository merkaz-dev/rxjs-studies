import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuequeComponent } from './queque.component';

describe('QuequeComponent', () => {
  let component: QuequeComponent;
  let fixture: ComponentFixture<QuequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
