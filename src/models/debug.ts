import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

export enum RxJsLogginLevel {
  TRACE,
  DEGUB,
  INFO,
  ERROR,
}

let rxjsLoggingLevel = RxJsLogginLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLogginLevel) {
  rxjsLoggingLevel = level;
}
// export const debug = (level: number, message: string) => (
//   source: Observable<any>
// ) =>
//   source.pipe(
//     tap((val) => {
//       if (level >= rxjsLoggingLevel) {
//         console.log(`${message}`, val);
//       }
//     })
//   );

export function debug(level: Number, message: string) {
  return function (source: Observable<any>) {
    return source.pipe(
      tap((val) => {
        if (level >= rxjsLoggingLevel) {
          console.log(`${message}`, val);
        }
      })
    );
  };
}
