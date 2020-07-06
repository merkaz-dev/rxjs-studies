import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, from, of, Subscription, interval } from 'rxjs';
import { mergeMap, delay, tap, publishReplay } from 'rxjs/operators';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.css'],
})
export class PublishReplayComponent implements OnInit {
  info: string;
  aVal = ' ';
  bVal = ' ';
  aSub: Subscription;
  bSub: Subscription;
  source$: ConnectableObservable<number> = interval(2000).pipe(
    mergeMap((v, i) => {
      return of(v).pipe(tap((v) => console.log('value', v)));
    }),
    publishReplay(3)
  ) as ConnectableObservable<number>;
  constructor() {}

  ngOnInit(): void {}
  subscribeA() {
    this.aSub = this.source$.subscribe((v) => {
      this.aVal = this.aVal + ' ' + v;
    });
    this.showInfo('A is subscribed');
  }

  subscribeB() {
    this.bSub = this.source$.subscribe((v) => {
      this.bVal = this.bVal + ' ' + v;
    });
    this.showInfo('B is subscribed');
  }

  unsubscribeA() {
    this.aSub.unsubscribe();
    this.showInfo('A is unsubscribe');
  }

  unsubscribeB() {
    this.bSub.unsubscribe();
    this.showInfo('B is unsubscribe');
  }

  connect() {
    this.source$.connect();
    this.showInfo('connect() is done');
  }
  private showInfo(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = '';
    }, 2000);
  }
}
