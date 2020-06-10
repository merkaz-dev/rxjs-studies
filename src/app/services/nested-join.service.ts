import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrls } from './../../assets/scripts/urls';
import { Observable, of, from, fromEvent } from 'rxjs';
import { mergeMap, map, mergeAll, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NestedJoinService {
  constructor(private httpClient: HttpClient) {}

  runMergeMap1(): Observable<any> {
    var obs1$ = from([
      { startDate: '2019-08-01', endDate: '2019-10-01' },
      { startDate: '2020-01-01', endDate: '2020-03-03' },
    ]);

    return obs1$.pipe(
      mergeMap((period) => this.getData(period.startDate, period.endDate)),
      map((array) => {
        console.log('array', array);
        // sort out srtring in alphabetic order
        return array.sort((a, b) =>
          a.slr !== b.slr ? (a.slr < b.slr ? -1 : 1) : 0
        );
      })
    );
  }
  private getData(startDate, endDate): Observable<any> {
    return this.httpClient.get(getUrls(startDate, endDate));
  }

  runMergeMap2() {}
}
