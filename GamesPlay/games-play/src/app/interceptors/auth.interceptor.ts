import { HttpInterceptorFn } from '@angular/common/http';
import { getUserData } from '../utils/userData';

// auth middleware
// in case of valid token => add it to the headers
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userData = getUserData();

  if (!userData) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      'X-Authorization': userData.accessToken,
    },
  });
  return next(authReq);
};
