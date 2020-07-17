import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { filter, mergeMap, map, takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css'],
})
export class CheckedComponent implements OnInit, AfterViewInit {
  chbxSub = new Subject();
  chbxOb$ = this.chbxSub.asObservable();
  line = '';

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  form: FormGroup;
  dots$ = interval(100).pipe(map(() => '.'));
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      chbx: [false, Validators.required],
    });
  }

  ngAfterViewInit() {
    this.form.valueChanges
      .pipe(
        filter((x) => x.chbx === true),
        mergeMap((val) => this.dots$.pipe(takeUntil(this.chbxOb$)))
      )
      .subscribe((v) => {
        this.line = this.line + v;
      });
  }
  click(event: any) {
    this.chbxSub.next(event);
  }
}
