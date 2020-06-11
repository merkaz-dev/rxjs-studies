import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, mergeMap, concatMap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComparisonService {
  collection = [
    { value: 1, bgColor: '#9F721D' },
    { value: 2, bgColor: '#FBA90A' },
    { value: 3, bgColor: 'black' },
    { value: 4, bgColor: '#9A0794' },
    { value: 5, bgColor: '#B8B8B8' },
    { value: 6, bgColor: '#F868F3' },
    { value: 7, bgColor: '#236AB9' },
    { value: 8, bgColor: '#D61A46' },
    { value: 9, bgColor: '#FDDC22' },
    { value: 10, bgColor: '#559E54' },
  ];
  // using switchMap
  switchMap$ = from(this.collection).pipe(
    switchMap((param) => this.getData(param))
  );
  // using mergeMap
  mergeMap$ = from(this.collection).pipe(
    mergeMap((param) => this.getData(param))
  );
  // using concatMap
  concatMap$ = from(this.collection).pipe(
    concatMap((param) => this.getData(param))
  );
  // using map
  map$ = from(this.collection).pipe(map((param) => this.getData(param)));

  private getData(param) {
    const delayTime = Math.floor(Math.random() * 5000) + 1;
    const obj = {
      value: `params: ${param.value} delay: ${delayTime}`,
      bgColor: param.bgColor,
    };
    return of(obj).pipe(delay(delayTime));
  }
  constructor() {}
}
