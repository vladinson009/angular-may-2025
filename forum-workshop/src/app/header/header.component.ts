import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { UserShape } from '../types/User';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  #authService = inject(AuthService);
  #errorService = inject(ErrorService);
  #errorSub!: Subscription;
  username: string = '';
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.#authService.isAuthenticated$.subscribe(
      (data) => (this.username = data.username)
    );
    this.#errorSub = this.#errorService.error$.subscribe((message) => {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = null;
      }, 5000);
    });
  }
  ngOnDestroy(): void {
    this.#errorSub.unsubscribe();
  }
}
