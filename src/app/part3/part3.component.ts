import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css'],
})
export class Part3Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToConnObs() {
    console.log('connobs clicked');
    this.router.navigate(['connobs']);
  }

  goToOwnObs() {
    this.router.navigate(['ownobs']);
  }
   
}
