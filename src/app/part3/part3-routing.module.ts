import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part3Component } from './part3.component';
import { BufferComponent } from './buffer/buffer.component';
import { CheckedComponent } from './checked/checked.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SearchLessonsComponent } from './search-lessons/search-lessons.component';

const routes: Routes = [
  { path: '', component: Part3Component },
  { path: 'buffer', component: BufferComponent },
  { path: 'checked', component: CheckedComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searchlessons', component: SearchLessonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part3RoutingModule {}
