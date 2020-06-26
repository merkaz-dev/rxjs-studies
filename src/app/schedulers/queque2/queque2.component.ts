import { Component, OnInit } from '@angular/core';
import { queueScheduler, range, of, interval } from 'rxjs';
import { queue } from 'rxjs/internal/scheduler/queue';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-queque2',
  templateUrl: './queque2.component.html',
  styleUrls: ['./queque2.component.css'],
})
export class Queque2Component implements OnInit {
  before: any;
  after: any;

  constructor() {}

  ngOnInit(): void {}
  run() {
    var obs$ = interval(2000, queue)
      .pipe(
        tap((v) => {
          this.before = v;
        }),
        mergeMap((v) => of(v, queue))
      )
      .subscribe((v) => {
        this.after = v;
      });
    //     if (state !== undefined) {
    //       console.log('before', state);
    //       this.schedule(state - 1); // `this` references currently executing Action,
    //       // which we reschedule with new state
    //       console.log('after', state);
    //     }
    //   },
    //   0,
    //   3
    // );
  }
}
