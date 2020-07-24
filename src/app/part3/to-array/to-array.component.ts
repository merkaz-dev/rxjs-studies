import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, from, of } from 'rxjs';
import {
  debounceTime,
  toArray,
  debounce,
  map,
  filter,
  switchMap,
  switchAll,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { LoadingService } from '../loading/loading.service';

const names = [
  { firstName: 'Vasia', lastName: 'Petrov' },
  { firstName: 'Vasia', lastName: 'Petrov' },
  { firstName: 'Petia', lastName: 'Invanov-Sidorov' },
  { firstName: 'Petia', lastName: 'Invanov-Vasiliev' },
  { firstName: 'Petia', lastName: 'Tsoi' },
];
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
  providers: [],
})
export class ToArrayComponent implements OnInit, AfterViewInit {
  videoUrl1 = 'pqLW0_VTX1k';
  videoUrl2 = 'y-abx-ghkug';
  videoUrl3 = 'V7VwqMVm6F4';
  videoUrl4 = 'WZOt-5jU6tw';
  input2 = new FormControl('');
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    const obs$ = fromEvent(document.querySelector('input'), 'input').pipe(
      debounceTime(400),
      map((event) => (event.target as HTMLInputElement).value),
      switchMap((value) =>
        this.getFullNames$(value).pipe(
          map(({ firstName, lastName }) => firstName + ' ' + lastName),
          toArray()
        )
      )
    );
    obs$.subscribe(console.log);

    const obs2$ = this.input2.valueChanges.pipe(debounceTime(400));
    obs2$.subscribe(console.log);
  }

  getFullNames$(search) {
    return from(names).pipe(filter((name) => name.firstName === search));
  }
}
