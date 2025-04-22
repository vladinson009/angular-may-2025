import {
  AuthEndpoints,
  DataEndpoints,
  LikesEndpoints,
} from './types/Constants';
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
export const LIKES_ENDPOINTS: LikesEndpoints = {
  likes: baseUrl + '/data/likes',
  getLikes: (tattooId: string) =>
    baseUrl +
    `/data/likes?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`,
  isLiked: (tattooId: string, userId: string) =>
    baseUrl +
    `/data/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export const AUTH_DATA: string = 'authData';

export const ERR_MESSAGES = {
  invalidRepass: 'Passwords does not match!',
};
