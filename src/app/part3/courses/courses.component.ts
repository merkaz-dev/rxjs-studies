import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getHttpObsAllCourses } from '../../../assets/scripts/own-obs';
import { getCoursesUrl } from '../../../assets/scripts/urls';
import { Course } from 'src/models/course';
import { map, shareReplay, finalize, delay } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<any>;
  courses: any;
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}

  loadCourses() {
    if (this.courses) {
      this.courses = [];
    }
    const loadedCourses$ = this.loadingService
      .showLoaderUntilCompleted(this.getHttpObsAllCourses())
      .pipe(delay(400));

    loadedCourses$.subscribe((courses) => {
      this.courses = courses;
    });
  }

  private getHttpObsAllCourses() {
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
}
