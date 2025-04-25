import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateFormShape } from '../../types/Data';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  #router = inject(Router);
  #dataService = inject(DataService);
  #fb = inject(FormBuilder);
  #createGroup() {
    return this.#fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      maxLevel: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.minLength(3)]],
      summary: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  createForm: FormGroup = this.#createGroup();
  errors = {} as CreateFormShape;

  onCreate(): void {
    this.errors = {} as CreateFormShape;
    if (this.createForm.invalid) {
      const errorFields = (
        Object.keys(this.createForm.controls) as (keyof CreateFormShape)[]
      ).filter((el: string) => {
        return this.createForm.controls[el].errors != null;
      });
      errorFields.forEach((element) => {
        this.errors[element] = this.createForm.controls[element].errors![
          'required'
        ]
          ? 'Field is required'
          : this.createForm.controls[element].errors!['minlength'] &&
            'Min char:' +
              this.createForm.controls[element].errors!['minlength']
                .requiredLength;
      });
      return;
    }
    this.#dataService.create(this.createForm.value).subscribe(() => {
      this.#router.navigate(['/games', 'catalogue']);
    });
  }
}
