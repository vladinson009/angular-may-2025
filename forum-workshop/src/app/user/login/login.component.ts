import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CreateUserShape, UserShape } from '../../types/User';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  #authService = inject(AuthService);

  loginData = {
    email: '',
    password: '',
  };

  onSubmit(body: CreateUserShape) {
    this.#authService.login(body).subscribe();
  }
}
