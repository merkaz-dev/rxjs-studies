import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { Part2RoutingModule } from './part2-routing.module';
import { Part2Component } from './part2.component';

@NgModule({
  declarations: [Part2Component],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    Part2RoutingModule,
  ],
  exports: [Part2Component],
  providers: [],
})
export class Part2Module {}
