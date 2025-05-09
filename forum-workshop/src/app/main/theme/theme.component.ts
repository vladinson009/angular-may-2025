import { Component, input } from '@angular/core';
import { ThemesShape } from '../../types/Themes';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  theme = input.required<ThemesShape>();
}
