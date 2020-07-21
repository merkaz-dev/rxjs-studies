import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';

import { map, shareReplay, tap, catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { User } from 'src/models/user';
import { getUserByEmail } from '../../../assets/scripts/urls';
const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  user: User = {
    email: 'Qanon@gmail.com',
    name: 'Qanon',
    password: '112233',
  };
  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    //!! - double negation. converts user to true if the user exists.
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);

    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  login(email: string): Observable<User> {
    return this.http.get<User>(getUserByEmail(email)).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError({ STATUS: err.status, MESSAGE: err.message });
      }),
      tap((user: User) => {
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
