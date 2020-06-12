import { Injectable } from '@angular/core';
import {
  from,
  Observable,
  combineLatest,
  of,
  interval,
  zip,
  forkJoin,
} from 'rxjs';
import { delay, switchMap, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CombineLatestService {
  obs1$ = from([
    { value: 'a-0', bgColor: '#D61A46' },
    { value: 'a-1', bgColor: '#D61A46' },
    { value: 'a-2', bgColor: '#D61A46' },
    { value: 'a-3', bgColor: '#D61A46' },
    { value: 'a-4', bgColor: '#D61A46' },
    { value: 'a-5', bgColor: '#D61A46' },
    { value: 'a-6', bgColor: '#D61A46' },
  ]).pipe(switchMap((item) => this.getData(item)));

  obs2$ = from([
    { value: 'b-0', bgColor: '#FDDC22' },
    { value: 'b-1', bgColor: '#FDDC22' },
    { value: 'b-2', bgColor: '#FDDC22' },
    { value: 'b-3', bgColor: '#FDDC22' },
    { value: 'b-4', bgColor: '#FDDC22' },
    { value: 'b-5', bgColor: '#FDDC22' },
    { value: 'b-6', bgColor: '#FDDC22' },
  ]).pipe(switchMap((item) => this.getData(item)));

  obs3$ = from([
    { value: 'c-0', bgColor: '#236AB9' },
    { value: 'c-1', bgColor: '#236AB9' },
    { value: 'c-2', bgColor: '#236AB9' },
    { value: 'c-3', bgColor: '#236AB9' },
    { value: 'c-4', bgColor: '#236AB9' },
    { value: 'c-5', bgColor: '#236AB9' },
    { value: 'c-6', bgColor: '#236AB9' },
  ]).pipe(switchMap((item) => this.getData(item)));

  interval1 = 500; //Math.floor(Math.random() * 2000) + 1;
  interval2 = 1000; //Math.floor(Math.random() * 2000) + 1;
  interval3 = 1500; //Math.floor(Math.random() * 2000) + 1;

  obs4$ = interval(this.interval1).pipe(
    take(7),
    map((val, i) => {
      return { value1: val + 1, time1: this.interval1 + this.interval1 * i };
    })
  );
  obs5$ = interval(this.interval2).pipe(
    take(6),
    map((val, i) => {
      return { value2: val + 1, time2: this.interval2 + this.interval2 * i };
    })
  );
  obs6$ = interval(this.interval3).pipe(
    take(5),
    map((val, i) => {
      return { value3: val + 1, time3: this.interval3 + this.interval3 * i };
    })
  );
  constructor() {}

  runCombineLatest(): Observable<any> {
    return combineLatest(this.obs1$, this.obs2$, this.obs3$);
  }

  runCombineLatest2(): Observable<any> {
    return combineLatest(this.obs4$, this.obs5$, this.obs6$, (o1, o2, o3) => {
      const obj = {
        name1: 'obs_1$ ',
        time1: 'time: ' + o1.time1,
        value1: 'value: ' + o1.value1,
        bgColor1: '#236AB9',
        name2: 'obs_2$ ',
        time2: 'time: ' + o2.time2,
        value2: 'value: ' + o2.value2,
        bgColor2: '#D61A46',
        name3: 'obs_3$ ',
        time3: 'time: ' + o3.time3,
        value3: 'value: ' + o3.value3,
        bgColor3: '#FDDC22',
      };
      return obj;
    });
  }

  runZip(): Observable<any> {
    return zip(this.obs4$, this.obs5$, this.obs6$, (o1, o2, o3) => {
      const obj = {
        name1: 'obs_1$ ',
        time1: 'time: ' + o1.time1,
        value1: 'value: ' + o1.value1,
        bgColor1: '#236AB9',
        name2: 'obs_2$ ',
        time2: 'time: ' + o2.time2,
        value2: 'value: ' + o2.value2,
        bgColor2: '#D61A46',
        name3: 'obs_3$ ',
        time3: 'time: ' + o3.time3,
        value3: 'value: ' + o3.value3,
        bgColor3: '#FDDC22',
      };
      return obj;
    });
  }

  runForkJoin(): Observable<any> {
    return forkJoin(this.obs4$, this.obs5$, this.obs6$).pipe(
      map(([o1, o2, o3]) => {
        const obj = {
          name1: 'obs_1$ ',
          time1: 'time: ' + o1.time1,
          value1: 'value: ' + o1.value1,
          bgColor1: '#236AB9',
          name2: 'obs_2$ ',
          time2: 'time: ' + o2.time2,
          value2: 'value: ' + o2.value2,
          bgColor2: '#D61A46',
          name3: 'obs_3$ ',
          time3: 'time: ' + o3.time3,
          value3: 'value: ' + o3.value3,
          bgColor3: '#FDDC22',
        };
        return obj;
      })
    ); //, (o1, o2, o3) => {
  }

  private getData(param) {
    const delayTime = Math.floor(Math.random() * 5000) + 1;
    const obj = {
      value: param.value,
      bgColor: param.bgColor,
      delayTime: delayTime,
    };
    return of(obj).pipe(delay(delayTime));
  }
}
