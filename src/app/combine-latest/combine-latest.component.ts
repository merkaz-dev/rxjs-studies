import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CombineLatestService } from '../services/combine-latest.service';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements OnInit {
  constructor(private combineLatestService: CombineLatestService) {}
  panelOpenState = false;
  arrays = {
    zip: [] = [],
    combineLatest: [] = [],
    forkJoin: [] = [],
  };
  elements: any[] = [];
  elements2: any[] = [];
  zipElements: any[] = [];
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

  ngOnInit(): void {
    this.input1_1 = new FormControl();
    this.input1_2 = new FormControl();
    combineLatest(
      this.input1_1.valueChanges,
      this.input1_2.valueChanges
    ).subscribe((res) => (this.fullName1.nativeElement.textContent = res));

    this.input2_1 = new FormControl();
    this.input2_2 = new FormControl();
  }
  runCombineLatest() {
    this.combineLatestService.runCombineLatest().subscribe((res) => {
      this.elements.push(...res);
    });
  }
  runAll() {
    this.combineLatestService.runCombineLatest2().subscribe((res) => {
      this.arrays.combineLatest.push(res);
    });

    this.combineLatestService.runZip().subscribe((res) => {
      this.arrays.zip.push(res);
    });

    this.combineLatestService.runForkJoin().subscribe((res) => {
      this.arrays.forkJoin.push(res);
    });
    console.log(this.arrays);
  }

  clearFields() {
    this.fullName1.nativeElement.textContent = '';
    this.nameInput1.nativeElement.value = '';
    this.surnameInput1.nativeElement.value = '';
    // this.fullName2.nativeElement.textContent = '';
    // this.nameInput2.nativeElement.value = '';
    // this.surnameInput2.nativeElement.value = '';
  }

  clearArray() {
    this.elements = [];
  }
  clearArray2() {
    this.arrays.combineLatest = [];
    this.arrays.zip = [];
    this.arrays.forkJoin = [];
  }
}
