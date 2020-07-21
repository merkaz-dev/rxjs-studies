import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthStore } from '../services/auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authStore: AuthStore,
    private router: Router
  ) {
    this.form = fb.group({
      email: ['grisha@gmail.com', Validators.required],
      password: ['112233', Validators.required],
    });
  }

  ngOnInit(): void {}
  login() {
    const credentials = this.form.value;
    this.authStore.login(credentials.email).subscribe(
      (v) => {
        this.router.navigateByUrl('/courses');
      },
      (err) => console.log('OBSERVER ERROR', err)
    );
  }
}
