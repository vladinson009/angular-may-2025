import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  #authService = inject(AuthService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.#authService.getToken();
    console.log(token);

    // If there is a token
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          'X-Authorization': token,
        },
      });
      return next.handle(cloned);
    }
    // if no token, continue
    return next.handle(req);
  }
}
