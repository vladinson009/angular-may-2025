import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { getUserData } from '../../utils/userData';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  #authService = inject(AuthService);
  isLoggedIn = this.#authService.isLoggedIn;

  logout(e: Event) {
    e.preventDefault();
    this.#authService.logout().subscribe();
  }
}
