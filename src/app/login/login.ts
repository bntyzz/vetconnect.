import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // Estado de pestañas: 'login' | 'register' | 'forgot'
  public activeTab = signal<'login' | 'register' | 'forgot'>('login');

  // Datos del formulario
  public email = signal<string>('');
  public password = signal<string>('');
  public rememberMe = signal<boolean>(true);
  public fullName = signal<string>('');
  public confirmPassword = signal<string>('');

  // Control de interfaz
  public showPassword = signal<boolean>(false);
  public isDarkMode = signal<boolean>(false);
  public isLoading = signal<boolean>(false);
  public errorMessage = signal<string | null>(null);
  public successMessage = signal<string | null>(null);

  // Cambiar tema Claro / Oscuro
  public toggleDarkMode(): void {
    this.isDarkMode.update(val => !val);
  }

  // Alternar visibilidad de contraseña
  public toggleShowPassword(): void {
    this.showPassword.update(val => !val);
  }

  // Pestañas
  public setTab(tab: 'login' | 'register' | 'forgot'): void {
    this.activeTab.set(tab);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }

  // Simulación de envío de formulario de Login
  public onLogin(event: Event): void {
    event.preventDefault();
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (!this.email().trim()) {
      this.errorMessage.set('Por favor, ingresa tu ID o correo electrónico.');
      return;
    }

    if (!this.password()) {
      this.errorMessage.set('Por favor, ingresa tu contraseña.');
      return;
    }

    this.isLoading.set(true);

    // Simulación de respuesta de API
    setTimeout(() => {
      this.isLoading.set(false);
      if (this.email().includes('@') && this.password().length >= 4) {
        this.successMessage.set(`¡Bienvenido de nuevo, ${this.email().split('@')[0]}! Inicio de sesión exitoso.`);
      } else {
        this.errorMessage.set('Credenciales incorrectas o contraseña demasiado corta.');
      }
    }, 1500);
  }

  // Simulación de registro
  public onRegister(event: Event): void {
    event.preventDefault();
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (!this.fullName().trim()) {
      this.errorMessage.set('Ingresa tu nombre completo.');
      return;
    }

    if (!this.email().trim()) {
      this.errorMessage.set('Ingresa un correo electrónico válido.');
      return;
    }

    if (this.password() !== this.confirmPassword()) {
      this.errorMessage.set('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.successMessage.set('¡Tu VetConnect ID ha sido creado con éxito! Ya puedes iniciar sesión.');
      this.activeTab.set('login');
    }, 1500);
  }

  // Simulación de recuperación de contraseña
  public onForgot(event: Event): void {
    event.preventDefault();
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (!this.email().trim()) {
      this.errorMessage.set('Ingresa tu correo para recuperar el acceso.');
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.successMessage.set(`Hemos enviado un enlace de restauración a ${this.email()}`);
    }, 1200);
  }
}
