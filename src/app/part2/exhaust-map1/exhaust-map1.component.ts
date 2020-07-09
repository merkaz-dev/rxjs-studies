import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import {
  exhaustMap,
  mergeMap,
  switchMap,
  delay,
  concatMap,
  tap,
  takeUntil,
} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { interval } from 'rxjs/internal/observable/interval';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-exhaust-map1',
  templateUrl: './exhaust-map1.component.html',
  styleUrls: ['./exhaust-map1.component.css'],
})
export class ExhaustMap1Component implements OnInit, AfterViewInit {
  arr = [];
  arrObs1 = [];

  @ViewChild('stop', { static: false }) stop: ElementRef;

  click$: Observable<any>;

  obs$ = interval(500).pipe(
    tap((v) => {
      this.arrObs1.push({ value: v });
    }),
    exhaustMap((v, i) => {
      return of({ value: v, index: i, bgColor: '#FDDC22' }).pipe(delay(1500));
    }),
    takeUntil(fromEvent(document, 'dblclick'))
  );

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  run() {
    console.log(this.stop);
    this.obs$.subscribe((v) => {
      this.arr.push(v);
    });
  }

  clear() {
    this.arr = [];
  }
}
