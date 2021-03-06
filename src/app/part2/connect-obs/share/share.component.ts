import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit {
  aVal = ' ';
  bVal = ' ';
  aSub: Subscription;
  bSub: Subscription;
  info: string;
  source$ = interval(1500).pipe(share());
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
  private showInfo(text: string) {
    this.info = text;
    setTimeout(() => {
      this.info = '';
    }, 2000);
  }
}
