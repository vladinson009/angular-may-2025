import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  template: '',
})
export class LogoutComponent implements OnInit {
  #authService = inject(AuthService);
  ngOnInit(): void {
    this.#authService.logout().subscribe();
  }
}
