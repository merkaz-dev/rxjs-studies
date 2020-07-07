import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { delay } from 'rxjs/internal/operators/delay';
import { distinctUntilChanged, scan } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed1',
  templateUrl: './distinct-until-changed1.component.html',
  styleUrls: ['./distinct-until-changed1.component.css'],
})
export class DistinctUntilChanged1Component implements OnInit {
  sub: Subscription;
  original = '1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10';
  mutated = ' ';
  obs$ = from([1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10]).pipe(
    distinctUntilChanged(),
    scan((acc, cur) => {
      return acc + ' ' + cur;
    }, '')
  );
  constructor() {}

  ngOnInit(): void {}
  run() {
    this.sub = this.obs$.subscribe((v) => {
      this.mutated = v;
    });
  }
  clear() {
    this.sub.unsubscribe();
    this.mutated = '';
  }
}
