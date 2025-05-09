import { Component, inject, OnInit } from '@angular/core';
import { ThemesShape } from '../types/Themes';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, ThemeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  #themeService = inject(ThemeService);
  themes: ThemesShape[] = [];

  ngOnInit(): void {
    this.#themeService.fetchThemes().subscribe({
      next: (themes) => (this.themes = themes),
    });
  }
}
