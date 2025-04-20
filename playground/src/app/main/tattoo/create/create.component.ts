import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GalleryService } from '../../../services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  #galleryService = inject(GalleryService);
  #router = inject(Router);
  #fb = inject(FormBuilder);
  createForm: FormGroup;
  formErrors: string[] = [];
  constructor() {
    this.createForm = this.#fb.group({
      tattooType: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onAdd(): void {
    this.formErrors = [];
    if (this.createForm.invalid) {
      // TODO error handling
    }
    this.#galleryService.create(this.createForm.value).subscribe(() => {
      this.#router.navigate(['/dashboard']);
    });
  }
}
