import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customEmailValidator } from '../../validators/emailValidator';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  #authService = inject(AuthService);
  #router = inject(Router);
  #fb = inject(FormBuilder);

  userInfo: FormGroup;

  constructor() {
    this.userInfo = this.#fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [customEmailValidator, Validators.email]],
      tel: ['', []],
    });
  }

  ngOnInit(): void {}
  onEdit() {}
  onCancel() {}
}
