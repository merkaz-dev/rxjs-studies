import { Component, OnInit } from '@angular/core';
import {
  map,
  filter,
  tap,
  startWith,
  switchMap,
  delay,
  delayWhen,
} from 'rxjs/operators';
import { interval, from, of, timer } from 'rxjs';

@Component({
  selector: 'app-ng-subscribe',
  templateUrl: './ng-subscribe.component.html',
  styleUrls: ['./ng-subscribe.component.css'],
})
export class NgSubscribeComponent implements OnInit {
  message: string;
  obs$ = from([
    2,
    null,
    3,
    undefined,
    1,
    3,
    null,
    2,
    undefined,
    3,
    null,
    1,
    3,
    null,
    4,
    false,
    5,
    undefined,
    null,
    'end',
  ]).pipe(
    switchMap((v, i) => of(v)),
    delayWhen((v, i) => timer(i * 1500)),
    tap((v) => {
      console.log('tap value', v);
      this.message = `Value is ${v}`;
    })
  );
  constructor() {}

  ngOnInit(): void {}
}
