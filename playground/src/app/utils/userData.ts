import { AUTH_DATA } from '../constants';
import { AuthResponse, LocalStorageData } from '../types/AuthService';

function getUserData(): LocalStorageData | null {
  const data = localStorage.getItem(AUTH_DATA);

  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}

function setUserData(userData: AuthResponse): string {
  const payload: LocalStorageData = {
    email: userData.email,
    token: userData.accessToken,
    _id: userData._id,
  };
  const session = JSON.stringify(payload);
  localStorage.setItem(AUTH_DATA, session);
  return session;
}

function clearUserData(): void {
  localStorage.removeItem(AUTH_DATA);
}

export { getUserData, setUserData, clearUserData };
