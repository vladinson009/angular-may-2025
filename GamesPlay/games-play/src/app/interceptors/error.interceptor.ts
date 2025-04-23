import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ERROR_REQUEST_MSG } from '../constants';
import { clearUserData } from '../utils/userData';
import { AuthService } from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  // middleware error handler to parse server errors.
  // in case of invalid token => clear user data and alert the user
  return next(req).pipe(
    catchError((error) => {
      if (error.error.message == ERROR_REQUEST_MSG.invalidToken) {
        clearUserData();
        authService.setLoggedIn(false);
        router.url !== '/' && router.navigate(['/']);
        alert(ERROR_REQUEST_MSG.invalidToken);
      }

      return throwError(() => error.error.message);
    })
  );
};
