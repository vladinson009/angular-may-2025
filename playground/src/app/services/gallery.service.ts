import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DATA_ENDPOINTS } from '../constants';
import { Observable } from 'rxjs';
import { GalleryData } from '../types/Data';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  #http = inject(HttpClient);
  #authServie = inject(AuthService);
  getAll(): Observable<GalleryData[]> {
    return this.#http.get<GalleryData[]>(DATA_ENDPOINTS.getAll);
  }
  create(credentials: Partial<GalleryData>): Observable<GalleryData> {
    const token = this.#authServie.getToken();
    let currentHeaders = new HttpHeaders();
    if (token) {
      currentHeaders = currentHeaders.set('X-Authorization', token);
    }
    return this.#http.post<GalleryData>(DATA_ENDPOINTS.gallery, credentials, {
      headers: currentHeaders,
    });
  }
}
