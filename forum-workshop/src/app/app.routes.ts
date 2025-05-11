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
import { authGuard } from './auth.guard';
import { EditComponent } from './profile/edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
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
    canActivate: [authGuard],
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
    canActivate: [authGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'theme/:themeId',
    component: ThemeContentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
