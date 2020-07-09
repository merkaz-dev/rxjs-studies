import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part2Component } from './part2.component';
import { ConnectObsComponent } from './connect-obs/connect-obs.component';
import { OwnObsComponent } from './own-obs/own-obs.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { DistinctUntilChanged1Component } from './distinct-until-changed1/distinct-until-changed1.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';

const routes: Routes = [
  { path: '', component: Part2Component },
  { path: 'ownobs', component: OwnObsComponent },
  { path: 'connobs', component: ConnectObsComponent },
  { path: 'concatmap', component: ConcatMapComponent },
  { path: 'typeahead', component: TypeaheadComponent },
  { path: 'delaywhen', component: DelayWhenComponent },
  { path: 'exhaustmap', component: ExhaustMapComponent },
  { path: 'distinctuntilchanged', component: DistinctUntilChangedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part2RoutingModule {}
