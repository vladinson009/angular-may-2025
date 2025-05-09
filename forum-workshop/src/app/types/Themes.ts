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
