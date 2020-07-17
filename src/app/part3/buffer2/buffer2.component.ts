import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { interval, fromEvent, Subscription, Observable } from 'rxjs';
import { buffer } from 'rxjs/internal/operators/buffer';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-buffer2',
  templateUrl: './buffer2.component.html',
  styleUrls: ['./buffer2.component.css'],
})
export class Buffer2Component implements OnInit, AfterViewInit {
  @ViewChild('button') button: ElementRef;
  interval$ = interval(1000);
  array = [];
  bufferArray = '';
  sub: Subscription;
  buffer$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.buffer$ = this.interval$.pipe(
      tap((val) => {
        this.bufferArray = this.bufferArray + ', ' + val;
      }),
      take(50),
      buffer(clicks$)
    );
  }
  run() {
    this.sub = this.buffer$.subscribe((v) => {
      this.array.push(v);
    });
  }
  unsub() {
    this.sub.unsubscribe();
  }
  clear() {
    this.array = [];
    this.bufferArray = '';
  }
}
