import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DATA_ENDPOINTS, LIKES_ENDPOINTS } from '../constants';
import { Observable } from 'rxjs';
import { GalleryData } from '../types/Data';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  #http = inject(HttpClient);

  getById(id: string | null): Observable<GalleryData> {
    return this.#http.get<GalleryData>(DATA_ENDPOINTS.gallery + `/${id}`);
  }
  getAll(): Observable<GalleryData[]> {
    return this.#http.get<GalleryData[]>(DATA_ENDPOINTS.getAll);
  }
  create(body: Partial<GalleryData>): Observable<GalleryData> {
    return this.#http.post<GalleryData>(DATA_ENDPOINTS.gallery, body);
  }
  updateById(id: string, body: GalleryData): Observable<GalleryData> {
    return this.#http.put<GalleryData>(DATA_ENDPOINTS.gallery + `/${id}`, body);
  }
  deleteById(id: string): Observable<GalleryData> {
    return this.#http.delete<GalleryData>(DATA_ENDPOINTS.gallery + `/${id}`);
  }
  likeById(tattooId: string) {
    return this.#http.post(LIKES_ENDPOINTS.likes, { tattooId });
  }
  getLikes(tattooId: string) {
    return this.#http.get(LIKES_ENDPOINTS.getLikes(tattooId));
  }
  isLiked(tattooId: string, userId: string) {
    return this.#http.get(LIKES_ENDPOINTS.isLiked(tattooId, userId));
  }
}
