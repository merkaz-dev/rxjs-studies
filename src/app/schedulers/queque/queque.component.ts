import { Component, OnInit } from '@angular/core';
import { of, combineLatest, queueScheduler, from } from 'rxjs';

@Component({
  selector: 'app-queque',
  templateUrl: './queque.component.html',
  styleUrls: ['./queque.component.css'],
})
export class QuequeComponent implements OnInit {
  constructor() {}
  aOfNull$ = of(1, 2);
  bOfNull$ = of(10);
  cOfNull$ = combineLatest(this.aOfNull$, this.bOfNull$, (a, b) => a + b);

  aOfQueue$ = of(1, 2, queueScheduler);
  bOfQueue$ = of(10, queueScheduler);
  cOfQueue$ = combineLatest(
    this.aOfQueue$,
    this.bOfQueue$,
    (a, b) => a + b,
    queueScheduler
  );

  aFromNull$ = from([1, 2]);
  bFromNull$ = from([10]);
  cFromNull$ = combineLatest(this.aFromNull$, this.bFromNull$, (a, b) => a + b);

  aFromQueue$ = from([1, 2], queueScheduler);
  bFromQueue$ = from([10], queueScheduler);
  cFromQueue$ = combineLatest(
    this.aFromQueue$,
    this.bFromQueue$,
    (a, b) => a + b,
    queueScheduler
  );

  vOfNullArr: any[] = [];
  vOfQueueArr: any[] = [];
  vFromNullArr: any[] = [];
  vFromQueueArr: any[] = [];

  ngOnInit(): void {}

  runOfWithNull() {
    this.cOfNull$.subscribe((v) => {
      console.log('of-Null', v);
      this.vOfNullArr.push(v);
    });
  }
  runOfWithQueue() {
    this.cOfQueue$.subscribe((v) => {
      console.log('of-Queue', v);
      this.vOfQueueArr.push(v);
    });
  }

  runFromWithNull() {
    this.cFromNull$.subscribe((v) => {
      console.log('from-Null', v);

      this.vFromNullArr.push(v);
    });
  }
  runFromWithQueue() {
    this.cFromQueue$.subscribe((v) => {
      console.log('from-Queue', v);
      this.vFromQueueArr.push(v);
    });
  }
}
