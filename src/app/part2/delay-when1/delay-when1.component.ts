import { Component, OnInit, OnDestroy } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { delayWhen, switchMap, exhaustMap } from 'rxjs/operators';
import { timer } from 'rxjs/internal/observable/timer';
import { of } from 'rxjs/internal/observable/of';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-delay-when1',
  templateUrl: './delay-when1.component.html',
  styleUrls: ['./delay-when1.component.css'],
})
export class DelayWhen1Component implements OnInit, OnDestroy {
  obs$ = from(['f', 'u', 'c', 'k']).pipe(
    switchMap((v) => {
      return of(v);
    }),
    delayWhen((v, i) => timer(i * 1000))
  );
  message = '';
  sub: Subscription;
  constructor() {}

  ngOnInit(): void {}
  run() {
    if (!this.sub) {
      this.sub = this.obs$.subscribe((v) => {
        this.message = this.message + v;
      });
    }
  }
  clear() {
    this.sub.unsubscribe();
    this.message = '';
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
