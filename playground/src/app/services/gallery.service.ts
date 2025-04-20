import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DATA_ENDPOINTS } from '../constants';
import { catchError, Observable } from 'rxjs';
import { GalleryData } from '../types/Data';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  #http = inject(HttpClient);

  getAll(): Observable<GalleryData[]> {
    return this.#http.get<GalleryData[]>(DATA_ENDPOINTS.getAll);
  }
}
