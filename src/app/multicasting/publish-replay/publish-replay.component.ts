import { Component, OnInit } from '@angular/core';
import { Subscription, interval, ConnectableObservable, from, of } from 'rxjs';
import { publishReplay, take, delay, mergeMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.css'],
})
export class PublishReplayComponent implements OnInit {
  info: string;
  sub1: Subscription;
  sub2: Subscription;
  source$: ConnectableObservable<number> = from([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'h',
  ]).pipe(
    mergeMap((v, i) => {
      return of(v).pipe(
        delay(i * 2000),
        tap((v) => console.log('value', v))
      );
    }),
    publishReplay(3)
  ) as ConnectableObservable<number>;
  val1: any;
  val2: any;
  constructor() {}

  ngOnInit(): void {}

  addSub1() {
    this.sub1 = this.source$.subscribe((v) => {
      this.val1 = v;
    });
    this.showMessage('Sub1 added');
  }
  addSub2() {
    this.sub2 = this.source$
      .pipe(
        mergeMap((v, i) => {
          return of(v).pipe(delay(i * 2000));
        }),
        tap((v) => {
          console.log('sub2 ', v);
        })
      )
      .subscribe((v) => {
        this.val2 = v;
      });
    this.showMessage('Sub2 added');
  }

  connect() {
    this.source$.connect();
    this.showMessage('Connected...');
  }
  unsubSub1() {
    if (this.sub1) {
      this.sub1.unsubscribe();
      this.showMessage('Sub1 unsub');
    } else this.showMessage('No sub!');
  }
  unsubSub2() {
    if (this.sub2) {
      this.sub2.unsubscribe();
      this.showMessage('Sub2 unsub');
    } else this.showMessage('No sub!');
  }

  private showMessage(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = undefined;
    }, 2000);
  }
}
