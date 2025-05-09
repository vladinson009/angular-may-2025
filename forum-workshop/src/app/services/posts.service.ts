import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PostShape } from '../types/Posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  #http = inject(HttpClient);
  #recentPostsEndpoint = environment.REST_ENDPOINTS.recentFivePosts;

  fetchRecentFive(): Observable<PostShape[]> {
    return this.#http.get<PostShape[]>(this.#recentPostsEndpoint);
  }
}
