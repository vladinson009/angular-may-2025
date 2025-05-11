import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { UserShape } from '../types/User';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  #authService = inject(AuthService);
  isUser: Observable<UserShape> = this.#authService.isAuthenticated$;
}
