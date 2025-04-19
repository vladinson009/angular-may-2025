import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  #authService = inject(AuthService);
  #router = inject(Router);

  login(email: string, password: string) {
    this.#authService.login({ email, password }).subscribe({
      next: () => {
        this.#router.navigate(['/']);
      },
      error: (err) => {
        console.log('Login failed:', err);
      },
    });
  }
}
