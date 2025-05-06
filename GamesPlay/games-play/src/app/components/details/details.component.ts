import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GalleryShape } from '../../types/Data';
import { DataService } from '../../services/data.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { getUserData } from '../../utils/userData';

@Component({
  selector: 'app-details',
  imports: [RouterLink, LoadingSpinnerComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #dataService = inject(DataService);
  item = {} as GalleryShape;
  isLoading: boolean = true;
  isOwner: boolean = false;

  ngOnInit(): void {
    this.#route.paramMap.subscribe((param) => {
      const gameId: string = param.get('gameId')!;
      this.#dataService.getById(gameId).subscribe((data) => {
        this.item = data;
        this.isOwner = getUserData()?._id == data._ownerId;
        this.isLoading = false;
      });
    });
  }
  onDelete(ev: Event) {
    ev.preventDefault();
    const confirmation = confirm(
      `Are you sure you want to delete ${this.item.title}?`
    );
    if (!confirmation) {
      return;
    }
    this.#dataService.deleteById(this.item._id).subscribe(() => {
      this.#router.navigate(['/games', 'catalogue']);
    });
  }
}
