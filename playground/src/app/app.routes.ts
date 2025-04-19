import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/users/login/login.component';
import { RegisterComponent } from './main/users/register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { CreateComponent } from './main/tattoo/create/create.component';
import { EditComponent } from './main/tattoo/edit/edit.component';
import { DetailsComponent } from './main/tattoo/details/details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'users',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'tattoo',
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'edit:tattooId', component: EditComponent },
      { path: 'details:tattooId', component: DetailsComponent },
    ],
  },
];
