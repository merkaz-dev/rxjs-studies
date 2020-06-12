import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NestedJoinService } from 'src/app/services/nested-join.service';
import { Subscription, merge, fromEvent, Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  elementsOld: any[] = [];
  elementsNew: any[] = [];
  subscription1: Subscription;
  subscription2: Subscription;
  input1_1: FormControl;
  input1_2: FormControl;
  @ViewChild('fullName1') fullName1: ElementRef;
  @ViewChild('nameInput1') nameInput1: ElementRef;
  @ViewChild('surnameInput1') surnameInput1: ElementRef;

  input2_1: FormControl;
  input2_2: FormControl;
  @ViewChild('fullName2') fullName2: ElementRef;
  @ViewChild('nameInput2') nameInput2: ElementRef;
  @ViewChild('surnameInput2') surnameInput2: ElementRef;

  constructor(private nestedJoins: NestedJoinService) {}
  ngOnInit(): void {
    this.input1_1 = new FormControl();
    this.input1_2 = new FormControl();
    this.subscription1 = this.input1_1.valueChanges
      .pipe(
        mergeMap((v1) =>
          this.input1_2.valueChanges.pipe(map((v2) => `${v1} ${v2}`))
        )
      )
      .subscribe((res) => (this.fullName1.nativeElement.textContent = res));

    this.input2_1 = new FormControl();
    this.input2_2 = new FormControl();
    this.subscription2 = merge(
      this.input2_1.valueChanges,
      this.input2_2.valueChanges
    )
      .pipe(
        map((v, i) => {
          console.log(`v: ${v} i: ${i}`);
          return `value: ${v}, index: ${i}`;
        })
      )
      .subscribe((res) => (this.fullName2.nativeElement.textContent = res));
  }

  clearFields() {
    this.fullName1.nativeElement.textContent = '';
    this.nameInput1.nativeElement.value = '';
    this.surnameInput1.nativeElement.value = '';
    this.fullName2.nativeElement.textContent = '';
    this.nameInput2.nativeElement.value = '';
    this.surnameInput2.nativeElement.value = '';
  }

  runMergeMap() {
    this.subscription1 = this.nestedJoins.runMergeMap1().subscribe((res) => {
      console.log(res);
      if (this.elementsNew.length === 0) {
        this.elementsNew = [...res];
        //this.elementsNew.sort((a, b) => a.slr.localeCompare(b.slr));
      } else {
        this.elementsOld = [...res];
        //this.elementsOld.sort((a, b) => a.slr.localeCompare(b.slr));
      }
    });
  }

  clearArray() {
    this.elementsOld = [];
    this.elementsNew = [];
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
