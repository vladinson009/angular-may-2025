import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GalleryShape } from '../../types/Data';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-catalogue',
  imports: [RouterLink, LoadingSpinnerComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css',
})
export class CatalogueComponent implements OnInit {
  #dataService = inject(DataService);
  #fetchData() {
    return this.#dataService.getAll().subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      },
    });
  }
  items: GalleryShape[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.#fetchData();
  }
}
