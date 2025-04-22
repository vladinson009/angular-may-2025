import { Component, inject, OnInit } from '@angular/core';
import { GalleryData } from '../../../types/Data';
import { GalleryService } from '../../../services/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  #fb = inject(FormBuilder);
  #galleryService = inject(GalleryService);
  #router = inject(ActivatedRoute);
  #routerNav = inject(Router);
  #id: string = '';
  data: Partial<GalleryData> = {};
  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.#fb.group({
      type: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      userType: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.#router.paramMap.subscribe((params) => {
      this.#id = params.get('tattooId') as string;

      this.#galleryService.getById(this.#id).subscribe((data) => {
        this.data = data;
        this.formGroup.patchValue(data);
      });
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      console.log('this.formGroup.errors');
      console.log(this.formGroup.errors);

      return;
    }
    this.#galleryService
      .updateById(this.#id, this.formGroup.value)
      .subscribe(() => {
        this.#routerNav.navigate(['/tattoo', 'details', this.#id]);
      });
  }
}
