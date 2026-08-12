import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login';
import { MipaginaComponent } from './pages/primera-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'VetConnect';
}
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mipagina', component: MipaginaComponent }
];
