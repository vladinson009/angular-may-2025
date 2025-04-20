import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { AuthService } from './services/auth.service';
import { getUserData } from './utils/userData';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  #authService = inject(AuthService);

  ngOnInit(): void {
    const userData = getUserData();
    this.#authService.userData$.set(userData);
    if (userData) {
      this.#authService.token = userData.token;
    }
  }
}
