import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { Part2RoutingModule } from './part2-routing.module';
import { Part2Component } from './part2.component';
import { ConnectObsComponent } from './connect-obs/connect-obs.component';
import { PublishComponent } from './connect-obs/publish/publish.component';
import { PublishReplayComponent } from './connect-obs/publish-replay/publish-replay.component';
import { ShareComponent } from './connect-obs/share/share.component';
import { ShareReplayComponent } from './connect-obs/share-replay/share-replay.component';
import { OwnObsComponent } from './own-obs/own-obs.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ExhaustMap1Component } from './exhaust-map1/exhaust-map1.component';
import { ExhaustMap2Component } from './exhaust-map2/exhaust-map2.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DelayWhen1Component } from './delay-when1/delay-when1.component';
import { DelayWhen2Component } from './delay-when2/delay-when2.component';
import { DistinctUntilChanged1Component } from './distinct-until-changed1/distinct-until-changed1.component';
import { DistinctUntilChanged2Component } from './distinct-until-changed2/distinct-until-changed2.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [
    Part2Component,
    ConnectObsComponent,
    PublishComponent,
    PublishReplayComponent,
    ShareComponent,
    ShareReplayComponent,
    OwnObsComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    DelayWhenComponent,
    DelayWhen1Component,
    DelayWhen2Component,
    ExhaustMap1Component,
    ExhaustMap2Component,
    DistinctUntilChangedComponent,
    DistinctUntilChanged1Component,
    DistinctUntilChanged2Component,
    TypeaheadComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    Part2RoutingModule,
  ],
  exports: [Part2RoutingModule, Part2Component],
  providers: [],
})
export class Part2Module {}
