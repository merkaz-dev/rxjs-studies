import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToPart1() {
    this.router.navigate(['part1']);
  }
  goToPart2() {
    console.log('part2 clicked');
    this.router.navigate(['part2']);
  }
}
