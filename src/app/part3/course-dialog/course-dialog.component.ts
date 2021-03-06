import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoadingService } from '../loading/loading.service';
import { throwError, from } from 'rxjs';
import { catchError, single, delay, concatMap } from 'rxjs/operators';
import { Course } from 'src/models/course';
import {
  updateCourseUrl,
  getCourseByIdUrl,
} from '../../../assets/scripts/urls';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  providers: [LoadingService, MessagesService],
})
export class CourseDialogComponent {
  form: FormGroup;
  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) {
    this.course = course;
    this.loadingService.loadingOff();

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      level: [course.level, Validators.required],
    });
  }

  save() {
    const changes = this.form.value;
    changes.id = this.course.id;
    console.log(changes);
    this.loadingService
      .showLoaderUntilCompleted(this.saveForm$(changes))
      .pipe(
        catchError((err) => {
          const message = 'Cound not save Course!';
          console.log(err);
          this.messagesService.showErrors(message);
          return throwError(err);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
      });
  }

  saveWithError() {
    const changes = this.form.value;
    changes.id = this.course.id;
    console.log(changes);
    this.loadingService
      .showLoaderUntilCompleted(this.saveFormWithError$(changes))
      .pipe(
        catchError((err) => {
          const message = 'Cound not save Course!';
          console.log(err);
          this.messagesService.showErrors(message);
          return throwError(err);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
      });
  }
  getLoading$() {
    return this.loadingService.loading$;
  }
  close() {
    this.dialogRef.close();
  }

  saveForm$(data) {
    // const controller = new AbortController();
    // const signal = controller.abort();
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
    ).pipe(delay(1000));
  }

  saveFormWithError$(data) {
    // const controller = new AbortController();
    // const signal = controller.abort();
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
    ).pipe(
      delay(1000),
      concatMap(() => throwError('This course cannot be saved!'))
    );
  }
}
