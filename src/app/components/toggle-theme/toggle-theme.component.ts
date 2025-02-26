import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  imports: [],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent {
  isDarkMode = false;

  darkmode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
