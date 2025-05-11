import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable, Observer, Subject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CreateUserShape, UserShape } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #router = inject(Router);
  #http = inject(HttpClient);
  #logoutEndpoint = environment.REST_ENDPOINTS.logout;
  #registerEndpoint = environment.REST_ENDPOINTS.register;
  #loginEndpoint = environment.REST_ENDPOINTS.login;
  #getTokenEndpoint = environment.REST_ENDPOINTS.getToken;

  #isAuthenticatedSubject = new BehaviorSubject({} as UserShape);

  isAuthenticated$: Observable<UserShape> =
    this.#isAuthenticatedSubject.asObservable();

  logout(): Observable<{}> {
    return this.#http
      .post<{}>(this.#logoutEndpoint, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          this.#isAuthenticatedSubject.next({} as UserShape);
          this.#router.navigateByUrl('/');
        })
      );
  }
  register(body: CreateUserShape): Observable<UserShape> {
    return this.#http
      .post<UserShape>(this.#registerEndpoint, body, { withCredentials: true })
      .pipe(
        tap({
          next: (data) => {
            this.#isAuthenticatedSubject.next(data);
          },
          error: (err) => {},
          complete: () => {},
        })
      );
  }
  login(body: CreateUserShape): Observable<UserShape> {
    return this.#http
      .post<UserShape>(this.#loginEndpoint, body, { withCredentials: true })
      .pipe(
        tap({
          next: (data) => {
            this.#isAuthenticatedSubject.next(data);
          },
          error: (err) => {},
          complete: () => {},
        })
      );
  }
  getToken(): void {
    this.#http
      .get<UserShape>(this.#getTokenEndpoint, { withCredentials: true })
      .subscribe({
        next: (user) => {
          this.#isAuthenticatedSubject.next(user);
        },
        error: () => {
          this.#isAuthenticatedSubject.next({} as UserShape);
        },
      });
  }
}
