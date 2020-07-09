import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, fromEvent } from 'rxjs';
import {
  map,
  startWith,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.css'],
})
export class ThrottleTimeComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;
  form: FormGroup;
  sub: Subscription;
  message = '';

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      description: [''],
    });
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map(
          (event: KeyboardEvent) => (event.target as HTMLTextAreaElement).value
        ),
        throttleTime(500)
      )
      .subscribe((v) => {
        this.message = v;
      });
  }

  run() {}
  clear() {
    this.message = '';
  }
}
