import { Component, OnInit } from '@angular/core';
import { getHttpObsAllCourses } from '../../../assets/scripts/own-obs';
import { noop } from 'rxjs/internal/util/noop';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-own-obs',
  templateUrl: './own-obs.component.html',
  styleUrls: ['./own-obs.component.css'],
})
export class OwnObsComponent implements OnInit {
  courses$: Observable<Course[]>;
  beginngerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  beginnerCourses: Course[];
  advancedCourses: Course[];

  constructor() {}

  ngOnInit(): void {
    this.courses$ = getHttpObsAllCourses();
    this.beginngerCourses$ = this.courses$.pipe(
      map((courses) => courses.filter((c) => c.level === 'BEGINNER'))
    );

    this.advancedCourses$ = this.courses$.pipe(
      map((courses) => courses.filter((c) => c.level === 'ADVANCED'))
    );
    this.advancedCourses$.subscribe((c) => {
      this.advancedCourses = c;
    });
    this.beginngerCourses$.subscribe((c) => {
      this.beginnerCourses = c;
    });
  }
}
