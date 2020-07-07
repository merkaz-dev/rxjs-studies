import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { distinctUntilChanged } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';
interface Person {
  age: number;
  name: string;
  bgColor: string;
}
@Component({
  selector: 'app-distinct-until-changed2',
  templateUrl: './distinct-until-changed2.component.html',
  styleUrls: ['./distinct-until-changed2.component.css'],
})
export class DistinctUntilChanged2Component implements OnInit {
  original = [
    { age: 4, name: 'Foo', bgColor: 'steelblue' },
    { age: 7, name: 'Bar', bgColor: 'red' },
    { age: 17, name: 'Bar', bgColor: 'red' },
    { age: 5, name: 'Foo', bgColor: 'steelblue' },
    { age: 6, name: 'Foo', bgColor: 'steelblue' },
  ];
  mutated = [];
  sub: Subscription;
  obs$ = from(this.original).pipe(
    distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
  );
  constructor() {}

  ngOnInit(): void {}
  run() {
    this.sub = this.obs$.subscribe((v) => {
      this.mutated.push(v);
    });
  }
  clear() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.mutated = [];
  }
}
