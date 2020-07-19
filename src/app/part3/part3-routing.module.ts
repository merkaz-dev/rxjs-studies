import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part3Component } from './part3.component';
import { BufferComponent } from './buffer/buffer.component';
import { CheckedComponent } from './checked/checked.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: Part3Component },
  { path: 'buffer', component: BufferComponent },
  { path: 'checked', component: CheckedComponent },
  { path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part3RoutingModule {}
