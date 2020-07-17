import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { Part3RoutingModule } from './part3-routing.module';
import { Part3Component } from './part3.component';
import { BufferComponent } from './buffer/buffer.component';
import { Buffer1Component } from './buffer1/buffer1.component';
import { Buffer2Component } from './buffer2/buffer2.component';
import { Buffer3Component } from './buffer3/buffer3.component';
import { CheckedComponent } from './checked/checked.component';

@NgModule({
  declarations: [
    Part3Component,
    BufferComponent,
    Buffer1Component,
    Buffer2Component,
    Buffer3Component,
    CheckedComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    AppMaterialModule,
    Part3RoutingModule,
    ReactiveFormsModule,
  ],
  exports: [Part3RoutingModule, Part3Component],
  providers: [],
})
export class Part3Module {}
