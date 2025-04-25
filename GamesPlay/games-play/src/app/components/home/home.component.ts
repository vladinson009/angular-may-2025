import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GalleryShape } from '../../types/Data';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [LoadingSpinnerComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
