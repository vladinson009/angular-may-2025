export interface AuthEndpoints {
  login: string;
  register: string;
  logout: string;
}
export interface DataEndpoints {
  getAll: string;
  gallery: string;
}
export interface LikesEndpoints {
  likes: string;
  getLikes: (tattooId: string) => string;
  isLiked: (tattooId: string, userId: string) => string;
}
