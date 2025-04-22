import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { GalleryService } from '../../../services/gallery.service';
import { GalleryData } from '../../../types/Data';
import { getUserData } from '../../../utils/userData';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  #navigateRouter = inject(Router);
  #route = inject(ActivatedRoute);
  #galleryService = inject(GalleryService);
  data: Partial<GalleryData> = {};
  likes: number = 0;
  isOwner: boolean = false;
  isUser: boolean = false;
  isLoading = true;
  isLiked = true;

  ngOnInit(): void {
    const userData = getUserData();
    this.#route.paramMap.subscribe((el) => {
      const currentTattooId: string = el.get('tattooId') as string;
      if (userData) {
        this.isUser = true;
        this.#galleryService
          .isLiked(currentTattooId, userData._id)
          .subscribe((res) => {
            console.log(res);

            this.isLiked = !!res;
          });
      }
      forkJoin({
        data: this.#galleryService.getById(currentTattooId),
        likes: this.#galleryService.getLikes(currentTattooId),
      }).subscribe(({ data, likes }) => {
        this.data = data;
        this.isOwner = userData ? userData._id == data._ownerId : false;
        this.isLoading = false;
        this.likes = Number(likes);
      });
    });
  }
  onDelete(e: Event) {
    e.preventDefault();
    const confirmModal = confirm(
      `Are you sure you wanto to delete ${this.data.type}`
    );
    if (!confirmModal) {
      return;
    }
    if (!this.data._id) {
      return;
    }
    this.#galleryService.deleteById(this.data._id).subscribe(() => {
      this.#navigateRouter.navigate(['/dashboard']);
    });
  }
  onLike(ev: Event) {
    ev.preventDefault();
    if (!this.data._id) {
      return;
    }
    this.#galleryService.likeById(this.data._id).subscribe(() => {
      this.isLiked = !this.isLiked;
      this.likes++;
    });
  }
}
