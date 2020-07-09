import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription, fromEvent, concat } from 'rxjs';
import {
  getLessonsUrl,
  getLessonsBySearchExpression,
} from '../../../assets/scripts/urls';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith,
} from 'rxjs/operators';

export interface Lesson {
  description: string;
  duration: string;
}
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
})
export class TypeaheadComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') input: ElementRef;
  form: FormGroup;
  sub: Subscription;
  lessons$ = this.getLessons();
  initialLesson$: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      description: [''],
    });
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    const searchLessons$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
      map(
        (event: KeyboardEvent) => (event.target as HTMLTextAreaElement).value
      ),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((search) => {
        return this.searchLessons(search);
      })
    );
    // this.initialLesson$ = concat(this.lessons$, searchLessons$);
    this.initialLesson$ = searchLessons$;
  }

  private getLessons(): Observable<Lesson[]> {
    return new Observable<Lesson[]>((observer) => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(getLessonsUrl(), { signal })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            observer.error(`Request failed with statud code ${res.status}`);
          }
        })
        .then((res) => {
          observer.next(res);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
      return () => controller.abort();
    });
  }

  private searchLessons(search): Observable<Lesson[]> {
    return new Observable<Lesson[]>((observer) => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(getLessonsBySearchExpression(search), { signal })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            observer.error(`Request failed with statud code ${res.status}`);
          }
        })
        .then((res) => {
          observer.next(res);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
      return () => controller.abort();
    });
  }
}
