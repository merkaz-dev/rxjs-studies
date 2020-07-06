import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from 'src/models/course';
import { Subscription, Observable, from, fromEvent, of, Subject } from 'rxjs';
import {
  getHttpObsSingleCourse,
  updateHttpObsSingleCourse,
} from '../../../assets/scripts/own-obs';
import {
  updateCourseUrl,
  getCourseByIdUrl,
} from '../../../assets/scripts/urls';
import {
  debounceTime,
  filter,
  concatMap,
  map,
  catchError,
  exhaustMap,
  tap,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map2',
  templateUrl: './exhaust-map2.component.html',
  styleUrls: ['./exhaust-map2.component.css'],
})
export class ExhaustMap2Component implements OnInit {
  form: FormGroup;

  saveClickSujbect = new Subject<Event>();
  saveClickObs$ = this.saveClickSujbect.asObservable();
  courseObs$ = getHttpObsSingleCourse(1);
  updateCourseObs$ = updateHttpObsSingleCourse();
  course: Course;
  formObs: Observable<any>;
  sub1: Subscription;
  sub2: Subscription;

  @ViewChild('save', { static: true }) saveButton: ElementRef;

  constructor(private fb: FormBuilder) {
    this.sub1 = this.courseObs$.subscribe((res) => {
      this.course = res;
      this.form = fb.group({
        description: [this.course.description, Validators.required],
        level: [this.course.level, Validators.required],
        category: [this.course.category, Validators.required],
      });
      this.saveClickObs$
        .pipe(
          filter(() => this.form.valid),
          exhaustMap(() => {
            const obj = this.form.value;
            obj.id = this.course.id;
            return this.saveForm(obj).pipe(delay(5000));
          }),
          concatMap((res) => {
            return this.getCourse$(this.course.id);
          })
        )
        .subscribe((course) => {
          this.course = course;
        });
      //   this.sub2 = this.form.valueChanges
      //     .pipe(
      //       debounceTime(500),
      //       filter(() => this.form.valid),
      //       concatMap((form) => {
      //         form.id = this.course.id;
      //         return of(0);
      //         // return this.saveForm(form);
      //       })
      //     )
      //     .subscribe(
      //       (v) => {
      //         //this.course = v;
      //       },
      //       (err) => {
      //         console.log(err);
      //       },
      //       () => console.log('Obs Complete')
      //     );
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

  save(event: any) {
    this.saveClickSujbect.next(event);
  }

  // save() {
  //   this.clickSave$
  //     .pipe(
  //       filter(() => this.form.valid),
  //       exhaustMap((form) => {
  //         const course = this.form.value;
  //         course.id = this.course.id;
  //         return this.saveForm(course);
  //       }),
  //       concatMap(() => {
  //         return this.getCourse$(this.course.id);
  //       })
  //     )
  //     .subscribe(
  //       (result) => {
  //         this.course = result;
  //       },
  //       (err) => console.log(err)
  //     );
  // }
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

  ngOnDestroy(): void {
    //this.sub1.unsubscribe();
    //this.sub2.unsubscribe();
  }
}
