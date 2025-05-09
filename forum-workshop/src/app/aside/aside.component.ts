import { Component, inject, OnInit } from '@angular/core';
import { AsidePostComponent } from './aside-post/aside-post.component';
import { PostShape } from '../types/Posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-aside',
  imports: [AsidePostComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent implements OnInit {
  #postService = inject(PostsService);
  posts: PostShape[] = [];

  ngOnInit(): void {
    this.#postService.fetchRecentFive().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
    });
  }
}
