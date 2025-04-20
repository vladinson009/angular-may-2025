import { AuthEndpoints, DataEndpoints } from './types/Constants';
const baseUrl: string = 'http://localhost:3030';
const authUrl: string = baseUrl + '/users';

export const AUTH_ENDPOINTS: AuthEndpoints = {
  login: authUrl + '/login',
  register: authUrl + '/register',
  logout: authUrl + '/logout',
};
export const DATA_ENDPOINTS: DataEndpoints = {
  getAll: baseUrl + '/data/tattoos?sortBy=_createdOn%20desc',
  gallery: baseUrl + '/data/tattoos',
};

export const AUTH_DATA: string = 'authData';

export const ERR_MESSAGES = {
  invalidRepass: 'Passwords does not match!',
};
