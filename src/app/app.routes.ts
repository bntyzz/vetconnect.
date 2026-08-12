import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { PrimeraPagina } from './pages/primera-pagina/primera-pagina';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mipagina', component: PrimeraPagina },
];
