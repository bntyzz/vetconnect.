import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { PrimeraPagina } from './pages/primera-pagina/primera-pagina';

export const routes: Routes = [
  { path: '', component: PrimeraPagina },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: PrimeraPagina },
];
