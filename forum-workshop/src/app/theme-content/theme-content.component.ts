import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { ThemesShape } from '../types/Themes';
import { DatePipe } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-theme-content',
  imports: [DatePipe, HomeComponent],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.css',
})
export class ThemeContentComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #authService = inject(AuthService);
  #themeService = inject(ThemeService);
  theme = {} as ThemesShape;
  isUser: boolean = this.#authService.isLogged;
  ngOnInit(): void {
    this.#route.paramMap.subscribe((params) => {
      const themeId: string | null = params.get('themeId');
      this.#themeService.fetchThemeById(themeId!).subscribe((theme) => {
        this.theme = theme;
      });
    });
  }
}
