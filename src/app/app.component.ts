import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';
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
}
