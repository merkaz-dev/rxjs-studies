import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatJoinOperatorsComponent } from './flat-join-operators/flat-join-operators.component';
import { NestedJoinOperatorsComponent } from './nested-join-operators/nested-join-operators.component';
import { ComparisonsComponent } from './comparisons/comparisons.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

const routes: Routes = [
  { path: 'flat', component: FlatJoinOperatorsComponent },
  { path: 'nested', component: NestedJoinOperatorsComponent },
  { path: 'comparison', component: ComparisonsComponent },
  { path: 'combinelatest', component: CombineLatestComponent },
  { path: 'errorhandling', component: ErrorHandlingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
