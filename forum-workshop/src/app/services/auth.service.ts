import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #router = inject(Router);
  #http = inject(HttpClient);
  #logoutEndpoint = environment.REST_ENDPOINTS.logout;

  isLogged: boolean = false;

  logout(): Observable<{}> {
    return this.#http.post<{}>(this.#logoutEndpoint, {}).pipe(
      tap(() => {
        this.#router.navigateByUrl('/');
      })
    );
  }
}
