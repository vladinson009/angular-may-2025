import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateFormShape, GalleryShape } from '../../types/Data';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #router = inject(Router);
  #fb = inject(FormBuilder);
  #dataService = inject(DataService);
  #gameId: string = '';
  formGroup!: FormGroup;

  constructor() {
    this.formGroup = this.#fb.group({
      title: ['', []],
      category: ['', []],
      maxLevel: ['', []],
      imageUrl: ['', []],
      summary: ['', []],
    });
  }

  ngOnInit(): void {
    this.#route.paramMap.subscribe((params) => {
      const gameId = params.get('gameId')!;
      this.#gameId = gameId;
      this.#dataService.getById(gameId!).subscribe((game) => {
        this.formGroup.patchValue(game);
      });
    });
  }
  onEdit() {
    if (this.formGroup.invalid) {
    }
    const body: CreateFormShape = this.formGroup.value;
    this.#dataService.editById(this.#gameId, body).subscribe(() => {
      this.#router.navigate(['/games', 'details', this.#gameId]);
    });
  }
}
