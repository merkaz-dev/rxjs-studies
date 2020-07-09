import { Component, OnInit } from '@angular/core';
import { Subject, from, of, Subscription, timer, Observable } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { delayWhen, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-delay-when2',
  templateUrl: './delay-when2.component.html',
  styleUrls: ['./delay-when2.component.css'],
})
export class DelayWhen2Component implements OnInit {
  message = '';
  info = '';
  info2 = '';
  sub: Subscription;
  buttonSubject = new Subject<MatButton>();
  buttonObs$ = this.buttonSubject.asObservable();
  durationObs$ = of(
    'durationObservable got conneceted to sourse Observable via subscribtion Delay'
  ).pipe(
    tap((v) => {
      this.info2 = v;
    }),
    switchMap((v) => timer(5000))
  );

  obs$ = from(['f', 'u', 'c', 'k']).pipe(
    switchMap((v) => {
      return of(v).pipe();
    }),
    delayWhen((v, i) => {
      console.log(`value: ${v} index: ${i}`);
      return this.buttonObs$.pipe(delay(i * 1000));
    }, this.durationObs$)
  );

  constructor() {}

  ngOnInit(): void {}
  subscribe() {
    if (!this.sub) {
      this.sub = this.obs$.subscribe((v) => {
        this.message = this.message + v;
        console.log('value', v);
        console.log('message', this.message);
      });
    }
    this.setInfo('Subscribed...');
  }

  run(event) {
    this.buttonSubject.next(event);
    this.setInfo('Run Clicked...');
  }
  clear() {
    this.sub.unsubscribe();
    this.message = '';
    this.setInfo('Unsubscribed...');
  }
  private setInfo(info: string) {
    this.info = info;
  }
}
