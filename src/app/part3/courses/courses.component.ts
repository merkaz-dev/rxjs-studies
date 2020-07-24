import { Component, OnInit, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { getCoursesUrl } from '../../../assets/scripts/urls';
import { Course } from 'src/models/course';
import { map, shareReplay, finalize, delay, catchError } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { MessagesService } from '../messages/messages.service';
import { AuthStore } from '../services/auth.store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<any>;
  courses: any;
  constructor(
    private loadingService: LoadingService,
    private messagesService: MessagesService,
    public dialog: MatDialog,
    public authStore: AuthStore,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openDialog(course) {
    console.log(course);
    this.dialog.open(CourseDialogComponent, { data: course });
  }

  loadCoursesWithError() {
    if (this.courses) {
      this.courses = [];
    }
    const loadedCourses$ = this.loadingService
      .showLoaderUntilCompleted(this.getCoursesWithError())
      .pipe(
        delay(400),
        catchError((err) => {
          const message = 'Could NOT load courses.';
          this.messagesService.showErrors(message);
          console.log(message, err);
          return throwError(err);
        })
      );

    loadedCourses$.subscribe((courses) => {
      this.courses = courses;
    });
  }
  loadCourses() {
    if (this.courses) {
      this.courses = [];
    }
    const loadedCourses$ = this.loadingService
      .showLoaderUntilCompleted(this.getCourses())
      .pipe(
        delay(400),
        catchError((err) => {
          const message = 'Could load courses.';
          this.messagesService.showErrors(message);
          console.log(message, err);
          return throwError(err);
        })
      );

    loadedCourses$.subscribe((courses) => {
      this.courses = courses;
    });
  }

  private getCourses() {
    return new Observable<Course[]>((observer) => {
      fetch(getCoursesUrl())
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          observer.next(res);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    }).pipe(
      map((v) => Object.values(v['payload'])),
      shareReplay()
    );
  }

  seeCourseDetails(id: string) {
    this.router.navigateByUrl('coursedetails/' + id);
  }

  private getCoursesWithError() {
    return new Observable<Course[]>((observer) => {
      fetch(getCoursesUrl())
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          observer.error('Could NOT load courses');
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    }).pipe(
      map((v) => Object.values(v['payload'])),
      shareReplay()
    );
  }
}
