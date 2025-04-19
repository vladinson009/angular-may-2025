import { AuthEndpoints } from './types/Constants';
const baseUrl: string = 'http://localhost:3030';
const authUrl: string = baseUrl + '/users';

export const AUTH_ENDPOINTS: AuthEndpoints = {
  login: authUrl + '/login',
  register: authUrl + '/register',
  logout: authUrl + '/logout',
};

export const AUTH_DATA: string = 'authData';
