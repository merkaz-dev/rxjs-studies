import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLessonsBySearchExpression } from '../../../assets/scripts/urls';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  searchLessons(search: string): Observable<any> {
    return this.httpClient
      .get(getLessonsBySearchExpression(search))
      .pipe(shareReplay());
  }
}
