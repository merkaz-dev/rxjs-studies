import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatJoinOperatorsComponent } from './flat-join-operators/flat-join-operators.component';
import { NestedJoinOperatorsComponent } from './nested-join-operators/nested-join-operators.component';
import { ComparisonsComponent } from './comparisons/comparisons.component';

import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { TestingComponent } from './testing/testing.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { HomeComponent } from './home/home.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'part1', component: Part1Component },
  { path: 'part2', component: Part2Component },
  { path: 'testing', component: TestingComponent },
  { path: 'schedulers', component: SchedulersComponent },
  { path: 'comparison', component: ComparisonsComponent },
  { path: 'flat', component: FlatJoinOperatorsComponent },
  { path: 'multicasting', component: MulticastingComponent },
  { path: 'nested', component: NestedJoinOperatorsComponent },
  { path: 'combinelatest', component: CombineLatestComponent },
  { path: 'errorhandling', component: ErrorHandlingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
