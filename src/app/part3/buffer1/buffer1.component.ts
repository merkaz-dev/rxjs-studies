import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { fromEvent, Subject, Observable, from } from 'rxjs';
import { throttleTime, filter, buffer, tap } from 'rxjs/operators';
import { MatButton } from '@angular/material/button/public-api';

@Component({
  selector: 'app-buffer1',
  templateUrl: './buffer1.component.html',
  styleUrls: ['./buffer1.component.css'],
})
export class Buffer1Component implements OnInit, AfterViewInit {
  constructor() {}
  message = '';
  clicksInfo = [];
  buttonSubject = new Subject();
  buttonObs$ = this.buttonSubject.asObservable();
  @ViewChild('button') button: ElementRef;
  //clicks$: Observable<any>;
  //buffer$: Observable<any>;

  ngAfterViewInit() {
    const clicks$ = fromEvent(this.button.nativeElement, 'click');
    const buffer$ = clicks$.pipe(
      buffer(clicks$.pipe(throttleTime(250))),
      tap((clickArray) => {
        console.log(clickArray);
      }),
      filter((clickArray) => clickArray.length > 1)
    );

    buffer$.subscribe((v: any[]) => {
      this.message = this.message + ' Double Click!';
      if (v) {
        let el = [...v];
        if (el.length > 0) {
          this.clicksInfo.push(
            `clientX: ${el[0].clientX} clientY: ${el[0].clientY}`
          );
        }
      }
    });
  }

  clickMe(event: any) {
    this.buttonSubject.next(event);
  }
  clear() {
    this.clicksInfo = [];
    this.message = '';
  }
  ngOnInit(): void {}
}
