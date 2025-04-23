import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./user.routes').then((m) => m.userRoutes),
  },
  {
    path: 'games',
    loadChildren: () => import('./games.routes').then((m) => m.gamesRoutes),
  },
];
