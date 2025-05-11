import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  const clonedReq = req.clone({
    withCredentials: true,
  });

  return next(clonedReq).pipe(
    catchError((error) => {
      const message = error?.error?.message || 'Something went wrong';
      if (message != 'Invalid token!') {
        errorService.emitError(message);
      }
      return throwError(() => error);
    })
  );
};
