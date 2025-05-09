import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ThemesShape } from '../types/Themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #http = inject(HttpClient);
  #themesEndpoint = environment.REST_ENDPOINTS.themes;

  fetchThemes(): Observable<ThemesShape[]> {
    return this.#http.get<ThemesShape[]>(this.#themesEndpoint);
  }
}
