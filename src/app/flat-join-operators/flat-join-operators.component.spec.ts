import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlatJoinOperatorsComponent } from './flat-join-operators.component';

describe('FlatJoinOperatorsComponent', () => {
  let component: FlatJoinOperatorsComponent;
  let fixture: ComponentFixture<FlatJoinOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlatJoinOperatorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatJoinOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
