import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Part2Component } from './part2.component';
import { ConnectObsComponent } from './connect-obs/connect-obs.component';
import { OwnObsComponent } from './own-obs/own-obs.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';

const routes: Routes = [
  { path: '', component: Part2Component },
  { path: 'connobs', component: ConnectObsComponent },
  { path: 'ownobs', component: OwnObsComponent },
  { path: 'concatmap', component: ConcatMapComponent },
  { path: 'exhaustmap', component: ExhaustMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part2RoutingModule {}
