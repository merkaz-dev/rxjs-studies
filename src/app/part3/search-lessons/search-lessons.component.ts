import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
})
export class SearchLessonsComponent implements OnInit {
  searchResults$: Observable<any>;
  activeLesson: any;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}
  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }
  openLesson(lesson: any) {
    this.activeLesson = lesson;
  }
  onBackToSearch() {
    this.activeLesson = null;
  }
}
