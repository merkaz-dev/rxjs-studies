import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { Part3RoutingModule } from './part3-routing.module';
import { Part3Component } from './part3.component';

@NgModule({
  declarations: [Part3Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    Part3RoutingModule,
  ],
  exports: [Part3RoutingModule, Part3Component],
  providers: [],
})
export class Part3Module {}
