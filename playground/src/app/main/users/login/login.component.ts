import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  #authService = inject(AuthService);
  #router = inject(Router);
  error: string = '';

  login(email: string, password: HTMLInputElement) {
    this.#authService.login({ email, password: password.value }).subscribe({
      next: () => {
        this.#router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message;
        password.value = '';
        console.log('Login failed:', err);
      },
    });
  }
}
