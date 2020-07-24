import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLoaderComponent } from './yt-loader.component';

describe('YtLoaderComponent', () => {
  let component: YtLoaderComponent;
  let fixture: ComponentFixture<YtLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
