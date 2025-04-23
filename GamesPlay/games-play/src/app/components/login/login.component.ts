import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserCredentials } from '../../types/Credentials';
import collectErrors from '../../utils/collectErrors';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, FormErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // ! Private methods:
  #authService = inject(AuthService);
  #fb = inject(FormBuilder);
  #createGroup(): FormGroup {
    return this.#fb.group({
      // ? shorthand syntax
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  // ! Public methods:
  loginForm: FormGroup = this.#createGroup();
  errors: string[] = [];

  onLogin() {
    this.errors = [];
    const credentials: UserCredentials = this.loginForm.value;
    if (this.loginForm.invalid) {
      this.errors = collectErrors(this.loginForm);
      this.loginForm.get('password')?.reset();
      return;
    }
    this.#authService.login(credentials).subscribe({
      error: (err) => {
        this.errors.push(err);
        this.loginForm.get('password')?.reset();
        return;
      },
    });
  }
}
