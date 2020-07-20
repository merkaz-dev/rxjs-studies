import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
const modules = [
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatInputModule,
  MatSliderModule,
  MatDialogModule,
  MatSelectModule,
  MatRippleModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCheckboxModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class AppMaterialModule {}
