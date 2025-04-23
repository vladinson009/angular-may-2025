import { Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

export const gamesRoutes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details/:gameId', component: DetailsComponent },
  { path: 'edit/:gameId', component: EditComponent },
];
