import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  #router = inject(Router);

  onEdit() {
    this.#router.navigate(['profile', 'edit']);
  }
}
