import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css'],
})
export class Part1Component implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}

  goToFlat() {
    this.router.navigate(['flat']);
  }
  goToNested() {
    this.router.navigate(['nested']);
  }
  goToComparison() {
    this.router.navigate(['comparison']);
  }
  goToCombineLatest() {
    this.router.navigate(['combinelatest']);
  }
  goToErrorhandling() {
    this.router.navigate(['errorhandling']);
  }
  goToMulticasting() {
    this.router.navigate(['multicasting']);
  }
  goToTesting() {
    this.router.navigate(['testing']);
  }
  goToSchedulers() {
    this.router.navigate(['schedulers']);
  }
}
