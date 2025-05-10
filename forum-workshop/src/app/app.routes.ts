import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemeComponent } from './main/theme/theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { LogoutComponent } from './user/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'themes',
    component: MainComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-theme',
    component: NewThemeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];
