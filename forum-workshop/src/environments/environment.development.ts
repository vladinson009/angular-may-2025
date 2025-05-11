import { EnvironmentShape } from '../app/types/Environments';

const baseUrl: string = 'http://localhost:3000/api';

export const environment: EnvironmentShape = {
  REST_ENDPOINTS: {
    themes: `${baseUrl}/themes`,
    recentFivePosts: `${baseUrl}/posts?limit=5`,
    logout: `${baseUrl}/logout`,
    login: `${baseUrl}/login`,
    register: `${baseUrl}/register`,
    getToken: `${baseUrl}/users/profile`,
  },
};
