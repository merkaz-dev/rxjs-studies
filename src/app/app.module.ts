import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MergeComponent } from './flat-join-operators/merge/merge.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatJoinOperatorsComponent } from './flat-join-operators/flat-join-operators.component';
import { ConcatComponent } from './flat-join-operators/concat/concat.component';
import { SwitchAllComponent } from './flat-join-operators/switch-all/switch-all.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NestedJoinOperatorsComponent } from './nested-join-operators/nested-join-operators.component';
import { MergeMapComponent } from './nested-join-operators/merge-map/merge-map.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConcatMapComponent } from './nested-join-operators/concat-map/concat-map.component';
import { ComparisonsComponent } from './comparisons/comparisons.component';
import { MergeConcSwitchComponent } from './comparisons/merge-conc-switch/merge-conc-switch.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { CatchErrorComponent } from './error-handling/catch-error/catch-error.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishComponent } from './multicasting/publish/publish.component';
import { PublishReplayComponent } from './multicasting/publish-replay/publish-replay.component';
import { PublishLastComponent } from './multicasting/publish-last/publish-last.component';
import { TestingComponent } from './testing/testing.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { QuequeComponent } from './schedulers/queque/queque.component';
import { Queque2Component } from './schedulers/queque2/queque2.component';
import { Part1Component } from './part1/part1.component';
import { HomeComponent } from './home/home.component';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeComponent,
    NavBarComponent,
    ConcatComponent,
    PublishComponent,
    MergeMapComponent,
    SwitchAllComponent,
    ConcatMapComponent,
    CatchErrorComponent,
    ComparisonsComponent,
    MulticastingComponent,
    CombineLatestComponent,
    ErrorHandlingComponent,
    MergeConcSwitchComponent,
    FlatJoinOperatorsComponent,
    NestedJoinOperatorsComponent,
    PublishReplayComponent,
    PublishLastComponent,
    TestingComponent,
    SchedulersComponent,
    QuequeComponent,
    Queque2Component,
    Part1Component,
    HomeComponent,
    Part2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
