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
  // arr2: any[];

  // obs1$ = from([
  //   { value: 'a-0', bgColor: '#D61A46' },
  //   { value: 'a-1', bgColor: '#D61A46' },
  //   { value: 'a-2', bgColor: '#D61A46' },
  //   { value: 'a-3', bgColor: '#D61A46' },
  //   { value: 'a-4', bgColor: '#D61A46' },
  //   { value: 'a-5', bgColor: '#D61A46' },
  //   { value: 'a-6', bgColor: '#D61A46' },
  // ]).pipe(
  //   concatMap((v, i) => {
  //     console.log(`v: ${v} i: ${i}`);
  //     return of(v).pipe(delay(2000));
  //   }),
  //   tap((v) => {
  //     // this.arr1.push(v);
  //   })
  // );

  // obs2$ = from([
  //   { value: 'b-0', bgColor: '#FDDC22' },
  //   { value: 'b-1', bgColor: '#FDDC22' },
  //   { value: 'b-2', bgColor: '#FDDC22' },
  //   { value: 'b-3', bgColor: '#FDDC22' },
  //   { value: 'b-4', bgColor: '#FDDC22' },
  //   { value: 'b-5', bgColor: '#FDDC22' },
  //   { value: 'b-6', bgColor: '#FDDC22' },
  // ]).pipe(
  //   concatMap((v, i) => {
  //     console.log(`v2: ${v} i2: ${i}`);
  //     return of(v).pipe(delay(500));
  //   })
  // );

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
