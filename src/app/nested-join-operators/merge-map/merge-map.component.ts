import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NestedJoinService } from 'src/app/services/nested-join.service';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit, OnDestroy {
  elementsOld: any[] = [];
  elementsNew: any[] = [];
  subscription: Subscription;
  input1: FormControl;
  input2: FormControl;
  @ViewChild('fullName') fullName: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;

  constructor(private nestedJoins: NestedJoinService) {}
  ngOnInit(): void {
    this.input1 = new FormControl();
    this.input2 = new FormControl();
    this.subscription = this.input1.valueChanges
      .pipe(
        mergeMap((v1) =>
          this.input2.valueChanges.pipe(map((v2) => `${v1} ${v2}`))
        )
      )
      .subscribe((res) => (this.fullName.nativeElement.textContent = res));
  }

  clearFields() {
    this.fullName.nativeElement.textContent = '';
    this.nameInput.nativeElement.value = '';
    this.surnameInput.nativeElement.value = '';
  }

  runMergeMap() {
    this.subscription = this.nestedJoins.runMergeMap1().subscribe((res) => {
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
    this.subscription.unsubscribe();
  }
}
