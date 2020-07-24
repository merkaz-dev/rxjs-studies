import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Course } from 'src/models/course';
import { Lesson } from 'src/app/part2/typeahead/typeahead.component';
import { CoursesService } from '../services/courses.service';
import { startWith, map, tap } from 'rxjs/operators';
interface CourseData {
  course: Course;
  lessons: Lesson[];
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  courseData$: Observable<CourseData>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
    const id = this.route.snapshot.params['courseId'];
    this.course$ = this.coursesService.loadCourseById(id).pipe(startWith(null));
    this.lessons$ = this.coursesService.loadLessons().pipe(startWith([]));
    this.courseData$ = combineLatest(this.course$, this.lessons$).pipe(
      map(([course, lessons]) => {
        return { course, lessons };
      }),
      tap(console.log)
    );
  }
  backToCourses() {
    this.router.navigateByUrl('/courses');
  }
  ngOnInit(): void {}
}
