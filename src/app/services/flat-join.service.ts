import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {
  map,
  take,
  merge,
  mergeMap,
  mergeAll,
  mergeScan,
  switchAll,
  mergeMapTo,
  concat,
  concatAll,
} from 'rxjs/operators';
import { IListItem } from '../../models/listItem';
@Injectable({
  providedIn: 'root',
})
export class FlatJoinService {
  constructor() {}
  runMerge(): Observable<any> {
    var obs1$ = interval(1250).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#4B0082',
          value: `Obs$1 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(7)
    );
    var obs2$ = interval(900).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#DC143C',
          value: `Obs$2 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(9)
    );

    var obs3$ = interval(450).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#FF1493',
          value: `Obs$3 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(11)
    );

    return obs1$.pipe(merge(obs2$, obs3$));
  }

  runConcat(): Observable<any> {
    var obs1$ = interval(500).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#4B0082',
          value: `Obs$1 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );
    var obs2$ = interval(500).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#DC143C',
          value: `Obs$2 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );

    var obs3$ = interval(450).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#FF1493',
          value: `Obs$3 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );
    return obs1$.pipe(concat(obs2$, obs3$));
  }

  runSwitchAll(): Observable<any> {
    var obs1$ = interval(500).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#4B0082',
          value: `Obs$1 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );
    var obs2$ = interval(500).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#DC143C',
          value: `Obs$2 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );

    var obs3$ = interval(450).pipe(
      map((element) => {
        let listItem: IListItem = {
          bgColor: '#FF1493',
          value: `Obs$3 El ${element + 1} is mapped`,
        };
        return listItem;
      }),
      take(5)
    );
    return obs1$.pipe(
      map((v) => obs2$.pipe(concat(obs3$))),
      switchAll()
    );
  }
}
