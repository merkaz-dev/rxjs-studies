import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subject, Subscription } from 'rxjs';
import { takeUntil, publish, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  pubSub1: Subscription;
  pubSub2: Subscription;
  refCountSub1: Subscription;
  refCountSub2: Subscription;

  event = new Subject<Event>();
  eventObs$ = this.event.asObservable();
  sourcePublish$: ConnectableObservable<number> = interval(1000).pipe(
    takeUntil(this.eventObs$),
    publish()
  ) as ConnectableObservable<number>;
  sourceRefCount$ = interval(1000).pipe(publish(), refCount());
  info: string;
  publishValue1: any;
  publishValue2: any;
  refCountValue1: any;
  refCountValue2: any;
  constructor() {}
  stopSourcePublish(event) {
    this.event.next(event);
    this.info = 'SourcePublish is stopped';
    setTimeout(() => {
      this.info = '';
    }, 2000);
  }
  subToPublish1() {
    this.pubSub1 = this.sourcePublish$.subscribe((v) => {
      this.publishValue1 = v;
    });
    this.showMessage('Subscribed to Publish1');
  }
  subToPublish2() {
    this.pubSub2 = this.sourcePublish$.subscribe((v) => {
      this.publishValue2 = v;
    });
    this.showMessage('Subscribed to Publish2');
  }
  unsubFromPublish1() {
    this.pubSub1.unsubscribe();
    this.showMessage('Unsubscribed from Publish1');
  }

  unsubFromPublish2() {
    this.pubSub2.unsubscribe();
    this.showMessage('Unsubscribed from Publish2');
  }
  publishConnect() {
    this.sourcePublish$.connect();
    this.showMessage('Publish called Connet()');
  }

  subToRefCount1() {
    this.refCountSub1 = this.sourceRefCount$.subscribe((v) => {
      this.refCountValue1 = v;
    });
    this.showMessage('Subscribed to RefCount1');
  }

  subToRefCount2() {
    this.refCountSub2 = this.sourceRefCount$.subscribe((v) => {
      this.refCountValue2 = v;
    });
    this.showMessage('Subscribed to RefCount2');
  }

  unsubFromRefCount1() {
    this.refCountSub1.unsubscribe();
    this.showMessage('Unsubscribed from RefCount1');
  }

  unsubFromRefCount2() {
    this.refCountSub2.unsubscribe();
    this.showMessage('Unsubscribed from RefCount2');
  }
  ngOnInit(): void {}

  private showMessage(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = undefined;
    }, 2000);
  }
}
