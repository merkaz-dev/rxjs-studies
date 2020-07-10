import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part3Component } from './part3.component';
 
const routes: Routes = [
  { path: '', component: Part3Component },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part3RoutingModule {}
