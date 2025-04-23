import { AuthEndpoints, ErrorRequestMsg } from './types/Constants';

const baseUrl: string = 'http://localhost:3030';
const authUrl: string = baseUrl + '/users';

export const USER_AUTH: string = 'userAuth';

export const AUTH_ENDPOINTS: AuthEndpoints = {
  login: authUrl + '/login',
  logout: authUrl + '/logout',
  register: authUrl + '/register',
};

export const ERROR_REQUEST_MSG: ErrorRequestMsg = {
  invalidToken: 'Invalid access token',
};
