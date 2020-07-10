import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, fromEvent, timer, from, interval, noop } from 'rxjs';
import { map, throttleTime, throttle, takeUntil, tap } from 'rxjs/operators';
import {
  debug,
  RxJsLogginLevel,
  setRxJsLoggingLevel,
} from '../../../models/debug';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css'],
})
export class ThrottleComponent implements OnInit {
  throttled = '';
  interval = 0;
  timer = '';
  done = '';
  sub: Subscription;
  source$ = interval(1000);
  //incrementally increase the time to resolve based on source
  promise = (val) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`Resolved: ${val}`), val * 200)
    );
  //when promise resolves emit item from sourcerx

  example$ = this.source$.pipe(
    tap((v) => {
      this.interval = v;
    }),
    debug(RxJsLogginLevel.TRACE, 'interval'),
    throttle(this.promise),
    map((val) => `Throttled off Promise: ${val}`),
    debug(RxJsLogginLevel.DEGUB, 'message from map')
  );

  @ViewChild('searchInput') input: ElementRef;

  obs$ = interval(1000).pipe(
    throttle((v) => interval(2000)),
    takeUntil(fromEvent(document, 'dblclick'))
  );

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    setRxJsLoggingLevel(RxJsLogginLevel.TRACE);
  }

  run2() {
    this.sub = this.example$.subscribe((v) => {
      this.throttled = v;
    });
  }
  clear2() {
    this.sub.unsubscribe();
    this.throttled = '';
    this.interval = 0;
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
    this.timer = '';
    this.done = '';
  }
}
