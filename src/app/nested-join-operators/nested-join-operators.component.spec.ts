import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedJoinOperatorsComponent } from './nested-join-operators.component';

describe('NestedJoinOperatorsComponent', () => {
  let component: NestedJoinOperatorsComponent;
  let fixture: ComponentFixture<NestedJoinOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedJoinOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedJoinOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
