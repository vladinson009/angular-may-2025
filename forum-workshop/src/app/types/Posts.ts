import { ThemesShape } from './Themes';
import { UserShape } from './User';

export interface PostShape {
  _id: string;
  likes: string[];
  text: string;
  userId: UserShape;
  themeId: ThemesShape;
  created_at: Date;
  updatedAt: Date;
}
