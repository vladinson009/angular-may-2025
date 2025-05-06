import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { COLLECTION_ENDPOINTS } from '../constants';
import { Observable } from 'rxjs';
import { CreateFormShape, GalleryShape } from '../types/Data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // ! Private methods
  #http = inject(HttpClient);
  // ! Public methods

  getAll(): Observable<GalleryShape[]> {
    return this.#http.get<GalleryShape[]>(COLLECTION_ENDPOINTS.catalogue);
  }
  getLastThree(): Observable<GalleryShape[]> {
    return this.#http.get<GalleryShape[]>(COLLECTION_ENDPOINTS.recentThree);
  }
  create(body: CreateFormShape): Observable<GalleryShape> {
    return this.#http.post<GalleryShape>(COLLECTION_ENDPOINTS.collection, body);
  }
  getById(gameId: string): Observable<GalleryShape> {
    return this.#http.get<GalleryShape>(
      COLLECTION_ENDPOINTS.collection + `/${gameId}`
    );
  }
  editById(gameId: string, body: CreateFormShape): Observable<GalleryShape> {
    return this.#http.put<GalleryShape>(
      COLLECTION_ENDPOINTS.collection + `/${gameId}`,
      body
    );
  }
  deleteById(gameId: string): Observable<{}> {
    return this.#http.delete(COLLECTION_ENDPOINTS.collection + `/${gameId}`);
  }
}
