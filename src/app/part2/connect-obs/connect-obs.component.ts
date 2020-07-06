import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { share } from 'rxjs/operators';
export interface ConnectableObservables {
  sharedSubscription: string;
  referenceCounting: string;
  operator: string;
  connectable: string;
  replaysEvents: string;
}

const ELEMENT_DATA: ConnectableObservables[] = [
  {
    operator: 'publish()',
    sharedSubscription: 'YES',
    connectable: 'YES',
    referenceCounting: 'NO',
    replaysEvents: 'Replays one event while reference count of subscribers > 0',
  },
  {
    operator: 'publishReplay()',
    sharedSubscription: 'YES',
    connectable: 'YES',
    referenceCounting: 'NO',
    replaysEvents: 'Replays at most bufferSize events',
  },
  {
    operator: 'publish().refCount()/share()',
    sharedSubscription: 'YES',
    connectable: 'NO',
    referenceCounting: 'YES',
    replaysEvents: 'Replays one event while reference count of subscribers > 0',
  },
  {
    operator: 'shareReplay()',
    sharedSubscription: 'YES',
    connectable: 'NO',
    referenceCounting: 'NO',
    replaysEvents: 'Replays at most bufferSize events',
  },
];
@Component({
  selector: 'app-connect-obs',
  templateUrl: './connect-obs.component.html',
  styleUrls: ['./connect-obs.component.css'],
})
export class ConnectObsComponent implements OnInit {
  aVal = ' ';
  bVal = ' ';
  aSub: Subscription;
  bSub: Subscription;
  info: string;
  source$ = interval(1500).pipe(share());
  constructor() {}

  displayedColumns: string[] = [
    'operator',
    'sharedSubscription',
    'connectable',
    'referenceCounting',
    'replaysEvents',
  ];
  dataSource = ELEMENT_DATA;
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
  private showInfo(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = '';
    }, 2000);
  }
}
