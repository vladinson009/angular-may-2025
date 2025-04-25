import {
  AuthEndpoints,
  ErrorRequestMsg,
  CollectionEndpoints,
} from './types/Constants';

const baseUrl: string = 'http://localhost:3030';
const authUrl: string = baseUrl + '/users';
const dataUrl: string = baseUrl + '/data';

export const USER_AUTH: string = 'userAuth';

export const AUTH_ENDPOINTS: AuthEndpoints = {
  login: authUrl + '/login',
  logout: authUrl + '/logout',
  register: authUrl + '/register',
};
export const COLLECTION_ENDPOINTS: CollectionEndpoints = {
  catalogue: dataUrl + '/games?sortBy=_createdOn%20desc',
  recentThree: dataUrl + '/games?sortBy=_createdOn%20desc&distinct=category',
  collection: dataUrl + '/games',
};

export const ERROR_REQUEST_MSG: ErrorRequestMsg = {
  invalidToken: 'Invalid access token',
};
