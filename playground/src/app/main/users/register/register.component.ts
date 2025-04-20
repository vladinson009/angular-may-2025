import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ERR_MESSAGES } from '../../../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  #authService = inject(AuthService);
  #router = inject(Router);
  #fb = inject(FormBuilder);
  registerForm: FormGroup;
  formErrors: string[] = [];

  constructor() {
    this.registerForm = this.#fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
      repass: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onRegister() {
    this.formErrors = [];
    if (this.registerForm.invalid) {
      this.registerForm.get('password')?.reset();
      this.registerForm.get('repass')?.reset();
      Object.keys(this.registerForm.controls).forEach((controlName) => {
        const control = this.registerForm.get(controlName);
        if (control && control.invalid) {
          const errors = control.errors;
          let name: string = '';
          switch (controlName) {
            case 'email':
              name = 'Email';
              break;
            case 'password':
              name = 'Password';
              break;
            case 'repass':
              name = 'Repeat password';
              break;
          }
          if (errors?.['required']) {
            this.formErrors.push(`${name} is required!`);
          }
          if (errors?.['email']) {
            this.formErrors.push(`${name} has an invalid format!`);
          }
          if (errors?.['minlength']) {
            this.formErrors.push(
              `${name} must be at least ${errors['minlength'].requiredLength}!`
            );
          }
        }
      });

      return;
    }
    const { email, password, repass } = this.registerForm.value;
    if (password.trim() !== repass.trim()) {
      this.formErrors.push(ERR_MESSAGES.invalidRepass);
      return;
    }
    this.#authService.register({ email, password }).subscribe({
      next: () => {
        this.#router.navigate(['/']);
      },
      error: (err) => {
        this.registerForm.get('password')?.reset();
        this.registerForm.get('repass')?.reset();
        this.formErrors.push(err.error.message);
      },
    });
  }
}
