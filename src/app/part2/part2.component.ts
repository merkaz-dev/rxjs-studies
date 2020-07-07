import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css'],
})
export class Part2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToConnObs() {
    console.log('connobs clicked');
    this.router.navigate(['connobs']);
  }

  goToOwnObs() {
    this.router.navigate(['ownobs']);
  }
  goToExhaustMap() {
    this.router.navigate(['exhaustmap']);
  }
  goToConcatMap() {
    this.router.navigate(['concatmap']);
  }

  goToDistinctUntilChanged() {
    this.router.navigate(['distinctuntilchanged']);
  }
}
