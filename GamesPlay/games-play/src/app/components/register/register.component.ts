import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserCredentials } from '../../types/Credentials';
import collectErrors from '../../utils/collectErrors';
import { RouterLink } from '@angular/router';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, FormErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // ! Private methods:
  #authService = inject(AuthService);
  #fb = inject(FormBuilder);
  #createGroup() {
    return this.#fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      'repeat password': ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  // ! Public methods:
  registerForm: FormGroup = this.#createGroup();
  errors: string[] = [];

  onRegister() {
    this.errors = [];
    const {
      email,
      password,
      'repeat password': rePass,
    } = this.registerForm.value;

    if (this.registerForm.invalid) {
      this.errors = collectErrors(this.registerForm);
      this.registerForm.get('password')?.reset();
      this.registerForm.get('repeat password')?.reset();
      return;
    }
    if (password != rePass) {
      this.errors.push("Passwords don't match!");
      return;
    }
    const credentials: UserCredentials = { email, password };
    this.#authService.register(credentials).subscribe({
      error: (err) => {
        this.errors.push(err);
        this.registerForm.get('password')?.reset();
        this.registerForm.get('repeat password')?.reset();
        return;
      },
    });
  }
}
