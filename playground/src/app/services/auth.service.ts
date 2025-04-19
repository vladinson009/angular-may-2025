import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AUTH_ENDPOINTS } from '../constants';

import { AuthResponse, LoginService } from '../types/AuthService';
import { clearUserData, setUserData } from '../utils/userData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #userData: WritableSignal<string> = signal('');
  #http = inject(HttpClient);
  #router = inject(Router);
  #token: string = '';
  readonly isLoggedIn = computed(() => this.#userData() !== '');

  login(credentials: LoginService): Observable<AuthResponse> {
    return this.#http
      .post<AuthResponse>(AUTH_ENDPOINTS.login, credentials)
      .pipe(
        tap((res) => {
          const userData = setUserData(res);
          this.#userData.set(userData);
          this.#token = res.accessToken;
        })
      );
  }
  logout() {
    return this.#http
      .get(AUTH_ENDPOINTS.logout, {
        headers: {
          'X-Authorization': this.#token,
        },
      })
      .pipe(
        tap(() => {
          clearUserData();
          this.#router.navigateByUrl('/');
          this.#token = '';
          this.#userData.set('');
        })
      );
  }
}
