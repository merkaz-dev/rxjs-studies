import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subscription } from 'rxjs';
import { takeUntil, publish } from 'rxjs/operators';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  aSub: Subscription;
  bSub: Subscription;
  aVal: string;
  bVal: string;
  info: string;
  sourcePublish$: ConnectableObservable<number> = interval(1000).pipe(
    publish()
  ) as ConnectableObservable<number>;

  constructor() {}

  ngOnInit(): void {}

  subscribeA() {
    this.aSub = this.sourcePublish$.subscribe((v) => {
      this.aVal = this.aVal + ' ' + v;
    });
    this.showInfo('A is subscribed');
  }

  subscribeB() {
    this.bSub = this.sourcePublish$.subscribe((v) => {
      this.bVal = this.bVal + ' ' + v;
    });
    this.showInfo('B is subscribed');
  }

  unsubscribeA() {
    this.aSub.unsubscribe();
    this.showInfo('A is unsubscribed');
  }

  unsubscribeB() {
    this.bSub.unsubscribe();
    this.showInfo('B is unsubscribed');
  }

  connect() {
    this.sourcePublish$.connect();
    this.showInfo('connect() is called');
  }

  private showInfo(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = '';
    }, 2000);
  }
}
