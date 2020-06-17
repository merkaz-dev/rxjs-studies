import { Component, OnInit } from '@angular/core';
import { interval, of, from, throwError, timer, range } from 'rxjs';
import {
  take,
  map,
  zip,
  catchError,
  delay,
  concatMap,
  switchAll,
  concatMapTo,
  startWith,
  finalize,
  retryWhen,
  tap,
  retry,
  delayWhen,
  scan,
  mergeMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css'],
})
export class CatchErrorComponent implements OnInit {
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  finalizeMessage1: any;
  finalizeMessage2: any;
  catchMessage: any;
  catchMessage5: any;
  error: any;
  catchMessage3: any;
  infoMessage3: any;
  infoMessage4: any;
  infoMessage5: any;
  infoMessage6: any;
  infoMessage7: any;
  error3: any;
  error4: any;
  error5: any;
  error6: any;
  error7: any;
  maxRetries = 3;
  replacement$ = from(['orange', 'banana', 'strawberry']).pipe(
    startWith('replacement begins...'),
    delay(1500),
    concatMap((v) => {
      return of(v).pipe(delay(1500));
    })
  );

  obs1$ = interval(1500).pipe(
    take(10),
    map((v) => {
      if (v > 3) {
        throw new Error('Fuck');
      }
      return `value: ${v}`;
    }),
    catchError((_) => this.replacement$)
  );

  obs2$ = interval(1500).pipe(
    take(10),
    map((v) => {
      if (v > 3) {
        throw new Error('Error coming from obs$2');
      }
      return `value: ${v}`;
    }),
    catchError((err) => {
      this.catchMessage =
        'catchError is about to throw an error from catchError-block...';
      return throwError(err);
    })
  );

  obs3$ = interval(1500).pipe(
    map((v) => {
      if (v > 3) {
        throw new Error('Value more than 3');
      }
      return `obs3$ value-${v}`;
    }),
    catchError((err) => {
      this.catchMessage3 =
        'catchError of obs3$ is about to throw an error from catchError-block...';
      return throwError(err);
    }),
    finalize(() => {
      this.finalizeMessage1 = 'Finalize1: reliazing resources...';
    }),
    catchError((err) => {
      this.infoMessage3 = 'Before replacing Observable3$...';
      return this.replacement$;
    }),
    finalize(() => {
      this.finalizeMessage2 = 'Finalize2: reliazing resources...';
    })
  );

  obs4$ = interval(1500).pipe(
    map((v) => {
      if (v > 3) {
        throw new Error('Error coming from obs$4');
      }
      return `value: ${v}`;
    }),
    retryWhen((errors$) => {
      return errors$.pipe(
        tap((v) => {
          this.infoMessage4 = 'retrying...';
        })
      );
    }),
    catchError((err) => {
      this.catchMessage =
        'catchError is about to throw an error from catchError-block...';
      return throwError(err);
    })
  );

  obs5$ = interval(1500).pipe(
    map((v) => {
      if (v > 3) {
        throw new Error('Error coming from obs$4');
      }
      return `value: ${v}`;
    }),
    retryWhen((errors) => {
      return errors.pipe(
        delayWhen(() => timer(2000)),
        tap(() => (this.infoMessage5 = 'obs5$ retrying...'))
      );
    })
  );

  obs6$ = interval(800).pipe(
    mergeMap((v) => {
      if (v > 1) {
        throw new Error('Error coming from obs$6');
      }
      return of(`value: ${v}`);
    }),
    retryWhen((errors$) => {
      return errors$.pipe(
        delay(2000),
        scan((errorCount, error) => {
          console.log(`ErrorCount: ${errorCount} Error: ${error}`);
          this.infoMessage6 = '';
          if (errorCount >= 3) {
            throw error;
          }
          errorCount++;
          this.infoMessage6 = `Retry ${errorCount}`;
          return errorCount;
        }, 0)
      );
    }),
    catchError((err) => {
      console.log('OUTTER CATCH BLoCK ', err);
      this.infoMessage6 = 'I am at CatchError-block now...';
      return throwError(err);
    })
  );

  obs7$ = interval(800).pipe(
    mergeMap((v) => {
      if (v > 2) {
        throw new Error('Error coming from obs7$');
      }
      return of(`value: ${v}`);
    }),
    retryWhen((errors$) =>
      range(0, this.maxRetries + 1).pipe(
        zip(errors$, (i, err) => ({ i: i, err: err })),
        mergeMap(({ i, err }) => {
          console.time('A');
          if (i === this.maxRetries) {
            throw err;
          }
          return timer(i * 1000).pipe(
            tap(() => {
              this.infoMessage7 = `Retried after ${i + 1} second(s)...`;
              console.timeEnd('A');
            })
          );
        })
      )
    ),
    catchError((err: Error) => {
      console.log('Error message', err.message);
      console.log('Error name', err.name);
      return throwError(err);
    })
  );
  constructor() {}

  ngOnInit(): void {}
  runStrategy1() {
    this.obs1$.subscribe(
      (v) => {
        this.value1 = v;
      },
      (err) => {},
      () => (this.value1 = 'Observable is complete...')
    );
  }

  runStrategy2() {
    this.obs2$.subscribe(
      (v) => {
        this.value2 = v;
      },
      (err) => {
        this.error = err;
      },
      () => (this.value2 = 'Observable is complete...')
    );
  }

  runStrategy3() {
    this.obs3$.subscribe((v) => {
      (this.value3 = v),
        (err) => (this.error3 = err),
        () => (this.value3 = 'obs3$ is complete');
    });
  }
  runImmediateRetryStrategy() {
    this.obs4$.subscribe((v) => {
      (this.value4 = v),
        (err) => (this.error4 = err),
        () => (this.value4 = 'obs4$ is complete');
    });
  }

  runDelayedRetryStrategy() {
    this.infoMessage5 = '';
    this.obs5$.subscribe((v) => {
      (this.value5 = v),
        (err) => (this.error5 = err),
        () => (this.value5 = 'obs5$ is complete');
    });
  }

  runFixedNumberOfRetries() {
    this.infoMessage6 = '';
    this.error6 = '';
    this.obs6$.subscribe(
      (v) => {
        this.value6 = v;
      },
      (err) => {
        this.error6 = err;
      },
      () => (this.value6 = 'Observable is complete...')
    );
  }

  runLinearBackoffRetries() {
    this.infoMessage7 = '';
    this.error7 = '';
    this.obs7$.subscribe(
      (v) => {
        this.value7 = v;
      },
      (err) => {
        this.error7 = err;
      },
      () => (this.value7 = 'obs7$ is complete...')
    );
  }
}
