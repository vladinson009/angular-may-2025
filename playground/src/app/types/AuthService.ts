export interface LoginService {
  email: string;
  password: string;
}

export interface LocalStorageData {
  email: string;
  token: string;
  _id: string;
}

export interface AuthResponse {
  email: string;
  accessToken: string;
  _id: string;
}
