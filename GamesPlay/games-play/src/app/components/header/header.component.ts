import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  #authService = inject(AuthService);
  isLogged = false;

  ngOnInit(): void {
    this.#authService.isLoggedIn$.subscribe((status) => {
      this.isLogged = status;
    });
  }

  onLogout(ev: Event) {
    ev.preventDefault();
    this.#authService.logout().subscribe();
  }
}
