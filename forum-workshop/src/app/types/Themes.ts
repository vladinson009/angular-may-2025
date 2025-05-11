import { UserShape } from './User';

export interface ThemesShape {
  _id: string;
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: UserShape;
  created_at: Date;
  updatedAt: Date;
}
export interface CreateThemeShape {
  title: {
    required: boolean | undefined;
    minlength: boolean | undefined;
  };
  post: {
    required: boolean | undefined;
    minlength: boolean | undefined;
  };
}
