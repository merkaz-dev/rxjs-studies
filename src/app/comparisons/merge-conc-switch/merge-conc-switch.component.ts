import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComparisonService } from 'src/app/services/comparison.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-conc-switch',
  templateUrl: './merge-conc-switch.component.html',
  styleUrls: ['./merge-conc-switch.component.css'],
})
export class MergeConcSwitchComponent implements OnInit, OnDestroy {
  mapArray: any[] = [];
  switchMapArray: any[] = [];
  concatMapArray: any[] = [];
  mergeMapArray: any[] = [];

  constructor(private comparsions: ComparisonService) {}

  ngOnInit(): void {}

  runAll() {
    this.comparsions.map$.subscribe((res) => {
      res.subscribe((res) => this.mapArray.push(res));
    });

    this.comparsions.mergeMap$.subscribe((res) => {
      this.mergeMapArray.push(res);
    });

    this.comparsions.concatMap$.subscribe((res) => {
      console.log('concat map', res);
      this.concatMapArray.push(res);
    });

    this.comparsions.switchMap$.subscribe((res) => {
      this.switchMapArray.push(res);
    });
  }

  clearAll() {
    this.mapArray = [];
    this.mergeMapArray = [];
    this.switchMapArray = [];
    this.concatMapArray = [];
  }
  ngOnDestroy() {}
}
