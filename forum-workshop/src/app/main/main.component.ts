import { Component, inject, OnInit } from '@angular/core';
import { ThemesShape } from '../types/Themes';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { AsideComponent } from '../aside/aside.component';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  imports: [CommonModule, ThemeComponent, AsideComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  #themeService = inject(ThemeService);
  #authService = inject(AuthService);
  isUser = this.#authService.isLogged;
  themes: ThemesShape[] = [];

  ngOnInit(): void {
    this.#themeService.fetchThemes().subscribe({
      next: (themes) => (this.themes = themes),
    });
  }
}
