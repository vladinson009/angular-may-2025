import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { customEmailValidator } from '../../validators/emailValidator';
import { CommonModule } from '@angular/common';
import { matchPassword } from '../../validators/matchPassword';
import { CreateUserShape, UserShape } from '../../types/User';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  #fb = inject(FormBuilder);
  #authService = inject(AuthService);

  registerForm: FormGroup;

  hasError(field: string, errorCode: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control?.hasError(errorCode) && control.dirty && control.touched);
  }
  get passwordGroup() {
    return this.registerForm.get('passwords') as FormGroup;
  }
  constructor() {
    this.registerForm = this.#fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, customEmailValidator]],
      tel: ['', []],
      passwords: this.#fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(5)]],
          rePassword: ['', [Validators.required]],
        },
        {
          validators: matchPassword,
        }
      ),
    });
  }
  onRegister() {
    const body: CreateUserShape = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwords.password,
      rePassword: this.registerForm.value.passwords.rePassword,
    };
    this.#authService.register(body).subscribe();
  }
}
