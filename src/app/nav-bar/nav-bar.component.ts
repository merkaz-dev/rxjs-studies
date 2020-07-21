import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../part3/services/auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, public authStore: AuthStore) {}

  login() {
    this.router.navigateByUrl('/login');
  }
  logout() {
    this.authStore.logout();
  }
  ngOnInit(): void {}
}
