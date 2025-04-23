import { USER_AUTH } from '../constants';
import { UserData } from '../types/Utils';

export function getUserData(): UserData | null {
  const userData = localStorage.getItem(USER_AUTH);
  if (!userData) {
    return null;
  }
  return JSON.parse(userData);
}

export function setUserData(response: UserData): void {
  const auth: UserData = {
    _id: response._id,
    email: response.email,
    accessToken: response.accessToken,
  };
  localStorage.setItem(USER_AUTH, JSON.stringify(auth));
}

export function clearUserData(): void {
  localStorage.removeItem(USER_AUTH);
}
