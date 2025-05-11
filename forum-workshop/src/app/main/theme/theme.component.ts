import { Component, inject, input, OnInit } from '@angular/core';
import { ThemesShape } from '../../types/Themes';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme',
  imports: [RouterLink],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  theme = input.required<ThemesShape>();
}
