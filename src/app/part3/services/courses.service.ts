import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  getLessonsBySearchExpression,
  getCourseByIdUrl,
  getLessonsUrl,
} from '../../../assets/scripts/urls';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Lesson } from 'src/models/lesson';
import { Course } from 'src/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  searchLessons(search: string): Observable<Lesson[]> {
    return this.httpClient
      .get<Lesson[]>(getLessonsBySearchExpression(search))
      .pipe(shareReplay());
  }

  loadCourseById(courseId: string): Observable<Course> {
    return this.httpClient.get<Course>(getCourseByIdUrl(courseId)).pipe(
      map((res) => {
        return res['payload'];
      }),
      shareReplay()
    );
  }

  loadLessons(): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(getLessonsUrl()).pipe(shareReplay());
  }
}
