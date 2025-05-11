import { Component, inject, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CreateThemeShape, ThemesShape } from '../types/Themes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-theme',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css',
})
export class NewThemeComponent {
  #fb = inject(FormBuilder);
  #router = inject(Router);
  #themeService = inject(ThemeService);

  themeForm: FormGroup;
  errors = {} as CreateThemeShape;
  constructor() {
    this.themeForm = this.#fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      post: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.errors = {} as CreateThemeShape;
    if (this.themeForm.invalid) {
      const title = this.themeForm.get('title');
      const post = this.themeForm.get('post');
      this.errors = {
        title: {
          required: title?.hasError('required'),
          minlength: title?.hasError('minlength'),
        },
        post: {
          required: post?.hasError('required'),
          minlength: post?.hasError('minlength'),
        },
      };
      return;
    }
    this.#themeService
      .createTheme(this.themeForm.value)
      .subscribe((theme: ThemesShape) => {
        this.#router.navigate(['/themes', theme._id]);
      });
  }
  onCancel() {
    this.themeForm.reset();
    this.#router.navigateByUrl('/');
  }
}
