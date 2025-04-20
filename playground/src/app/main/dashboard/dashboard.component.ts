import { Component, inject, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { GalleryData } from '../../types/Data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  #galleryService = inject(GalleryService);
  data: GalleryData[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.#galleryService.getAll().subscribe((data) => {
      this.data = data;
      this.isLoading = false;
    });
  }
}
