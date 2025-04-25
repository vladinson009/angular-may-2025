export interface AuthEndpoints {
  login: string;
  logout: string;
  register: string;
}
export interface CollectionEndpoints {
  catalogue: string;
  recentThree: string;
  collection: string;
}

export interface ErrorRequestMsg {
  invalidToken: string;
}
