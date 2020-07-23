import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit, AfterViewInit {
  @Input() lesson: any;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.lesson);
  }
}
