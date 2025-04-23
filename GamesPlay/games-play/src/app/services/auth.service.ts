import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AUTH_ENDPOINTS } from '../constants';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { clearUserData, getUserData, setUserData } from '../utils/userData';
import { UserCredentials } from '../types/Credentials';
import { UserData } from '../types/Utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // ! Private methods
  #http = inject(HttpClient);
  #router = inject(Router);
  #isLoggedSubject = new BehaviorSubject<boolean>(!!getUserData());

  #onAuthSuccess(res: UserData, isLogging: boolean) {
    isLogging ? setUserData(res) : clearUserData();
    this.#router.navigate(['/']);
    this.setLoggedIn(isLogging);
  }
  // ! Public methods
  isLoggedIn$ = this.#isLoggedSubject.asObservable();

  setLoggedIn(value: boolean): void {
    this.#isLoggedSubject.next(value);
  }
  logout(): Observable<UserData> {
    return this.#http
      .get<UserData>(AUTH_ENDPOINTS.logout)
      .pipe(tap((res) => this.#onAuthSuccess(res, false)));
  }
  login(credentials: UserCredentials): Observable<UserData> {
    return this.#http.post<UserData>(AUTH_ENDPOINTS.login, credentials).pipe(
      tap((res) => this.#onAuthSuccess(res, true)),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
  register(credentials: UserCredentials): Observable<UserData> {
    return this.#http.post<UserData>(AUTH_ENDPOINTS.register, credentials).pipe(
      tap((res) => this.#onAuthSuccess(res, true)),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
}
