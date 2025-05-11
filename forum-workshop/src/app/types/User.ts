export interface UserShape {
  _id: string;
  themes: string[];
  posts: string[];
  tel: string;
  email: string;
  username: string;
  created_at: Date;
  updatedAt: Date;
}
export interface CreateUserShape {
  username?: string;
  email: string;
  password: string;
  rePassword?: string;
}
