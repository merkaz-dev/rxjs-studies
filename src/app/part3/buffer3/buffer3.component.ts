import { Component, OnInit, AfterViewInit } from '@angular/core';
import { interval, fromEvent, Subscription, Observable } from 'rxjs';
import { buffer, throttleTime, scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-buffer3',
  templateUrl: './buffer3.component.html',
  styleUrls: ['./buffer3.component.css'],
})
export class Buffer3Component implements OnInit, AfterViewInit {
  clicks$ = fromEvent(document, 'click');
  buttonClicks$ = this.clicks$.pipe(
    scan((acc, val: any) => {
      let obj = {
        val: val,
      };
      //console.log('acc', acc);

      return obj;
    }, {}),
    buffer(this.clicks$.pipe(throttleTime(2000)))
  );
  constructor() {}
  sub: Subscription;

  ngOnInit(): void {}

  subscribe() {
    this.sub = this.buttonClicks$.subscribe((v) => {
      console.log('HERE: ', v);
    });
  }
  ngAfterViewInit() {
    //const myButton = document.getElementById('button');
    //console.log(myButton);
    //const buttonClicks$ = fromEvent(document, 'click');
    //const buttonClicks$ =
  }
}
