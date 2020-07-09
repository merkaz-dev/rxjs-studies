import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, fromEvent, timer, from, interval, noop } from 'rxjs';
import { map, throttleTime, throttle, takeUntil } from 'rxjs/operators';
import { time } from 'console';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css'],
})
export class ThrottleComponent implements OnInit {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');
    }, 10000);
  });
  promise$ = from(this.promise);

  @ViewChild('searchInput') input: ElementRef;
  form: FormGroup;
  sub: Subscription;
  message = '';
  timer = '';
  done = '';

  obs$ = interval(1000).pipe(
    throttle((v) => interval(2000)),
    takeUntil(fromEvent(document, 'dblclick'))
  );

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      description: [''],
    });
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map(
          (event: KeyboardEvent) => (event.target as HTMLTextAreaElement).value
        ),
        throttle(() => this.promise$)
      )
      .subscribe((v) => {
        this.message = v;
      });
  }

  run() {
    this.obs$.subscribe(
      (v) => {
        this.timer = this.timer + ' .... ' + v;
      },
      noop,
      () => {
        this.done = 'Observable is DONE!';
      }
    );
  }
  clear() {
    this.message = '';
    this.timer = '';
    this.done = ''
  }
}
