import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AUTH_ENDPOINTS } from '../constants';

import { AuthResponse, LoginService } from '../types/AuthService';
import { getUserData, setUserData } from '../utils/userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #accessToken = signal('');
  #http = inject(HttpClient);
  readonly isLoggedIn = computed(() => !!getUserData());

  login(credentials: LoginService): Observable<AuthResponse> {
    return this.#http
      .post<AuthResponse>(AUTH_ENDPOINTS.login, credentials)
      .pipe(
        tap((res) => {
          const userToken = setUserData(res);
          this.#accessToken.set(userToken);
        })
      );
  }
}
