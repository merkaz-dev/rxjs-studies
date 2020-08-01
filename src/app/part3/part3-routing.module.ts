import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part3Component } from './part3.component';
import { BufferComponent } from './buffer/buffer.component';
import { CheckedComponent } from './checked/checked.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SearchLessonsComponent } from './search-lessons/search-lessons.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { NgSubscribeComponent } from './ng-subscribe/ng-subscribe.component';

const routes: Routes = [
  { path: '', component: Part3Component },
  { path: 'buffer', component: BufferComponent },
  { path: 'checked', component: CheckedComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'toarray', component: ToArrayComponent },
  { path: 'ngsubscribe', component: NgSubscribeComponent },
  { path: 'searchlessons', component: SearchLessonsComponent },
  { path: 'coursedetails/:courseId', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part3RoutingModule {}
