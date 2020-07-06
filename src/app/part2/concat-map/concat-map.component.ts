import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  getHttpObsSingleCourse,
  updateHttpObsSingleCourse,
} from '../../../assets/scripts/own-obs';
import {
  updateCourseUrl,
  getCourseByIdUrl,
} from '../../../assets/scripts/urls';
import { Course } from '../../../models/course';
import { Observable, Subscription, from } from 'rxjs';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import {
  filter,
  concatMap,
  debounceTime,
  debounce,
  tap,
  catchError,
  map,
} from 'rxjs/operators';
@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit, OnDestroy {
  form: FormGroup;
  courseObs$ = getHttpObsSingleCourse(1);
  updateCourseObs$ = updateHttpObsSingleCourse();
  course: Course;
  sub: Subscription;
  constructor(private fb: FormBuilder) {
    this.sub = this.courseObs$.subscribe((res) => {
      this.course = res;
      this.form = fb.group({
        description: [this.course.description, Validators.required],
        level: [this.course.level, Validators.required],
        category: [this.course.category, Validators.required],
      });
      this.form.valueChanges
        .pipe(
          debounceTime(500),
          filter(() => this.form.valid),
          concatMap((form) => {
            form.id = this.course.id;
            return this.saveForm(form);
          }),
          concatMap((response: Response) => {
            return this.getCourse$(this.course.id);
          })
        )
        .subscribe(
          (v) => {
            this.course = v;
          },
          (err) => {
            console.log(err);
          },
          () => console.log('Obs Complete')
        );
    });
  }

  getCourse$(courseId) {
    return new Observable((observer) => {
      fetch(getCourseByIdUrl(courseId))
        .then((response: Response) => {
          return response.json();
        })
        .then((result: Course) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    }).pipe(
      map((res) => res['payload']),
      catchError((err, caught) => {
        return err;
      })
    );
  }
  saveForm(data) {
    return from(
      fetch(updateCourseUrl(), {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
    );
  }
  ngOnInit(): void {}
  save() {
    console.log(this.form);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
